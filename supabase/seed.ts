import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'

async function seed() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env.local')
    process.exit(1)
  }

  // Use fetch-only mode to avoid WebSocket issues in Node 20
  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false
    }
  })

  const locations = [
    {
      name: "Blackwood Sanitarium",
      slug: "blackwood-sanitarium",
      description: "A decaying asylum in the Victorian highlands, closed in 1964 following multiple patient disappearances.",
      haunting_type: "Residual / Poltergeist",
      address: "Blackwood, Victoria, AU",
      history: "Constructed in 1890, the asylum was known for its experimental 'Deep Sleep' therapies."
    },
    {
      name: "Greyfriars Kirkyard",
      slug: "greyfriars-shadows",
      description: "One of the most haunted graveyards in the world, home to the notorious Mackenzie Poltergeist.",
      haunting_type: "Intelligent / Poltergeist",
      address: "Edinburgh, EH1 2QQ, Scotland",
      history: "The site of the 17th-century Covenanters' Prison where thousands were tortured and executed."
    }
  ]

  const team = [
    {
      name: "Dr. Alistair Vance",
      role: "Lead Investigator & Tech Specialist",
      bio: "Former physicist specializing in acoustic anomalies and electromagnetic field fluctuations.",
      social_links: { twitter: "@vance_vault" }
    },
    {
      name: "Sarah Thorne",
      role: "Historical Researcher & Sensitive",
      bio: "Specializes in archival research and intuitive site mapping with over 15 years of experience.",
      social_links: { twitter: "@sarah_vault" }
    }
  ]

  console.log('--- Starting Seed Operation ---')

  // 1. Seed Locations
  const { data: locs, error: locError } = await supabase
    .from('locations')
    .upsert(locations, { onConflict: 'slug' })
    .select()
  
  if (locError) {
    console.error('Error seeding locations:', locError)
    return
  }
  console.log('✅ Locations seeded successfully')

  // 2. Seed Team
  const { error: teamError } = await supabase
    .from('team')
    .upsert(team, { onConflict: 'name' })
  
  if (teamError) {
    console.error('Error seeding team:', teamError)
    return
  }
  console.log('✅ Team members seeded successfully')

  // 3. Seed Investigations
  const whisperingAsylum = {
    title: "The Whispering Asylum",
    slug: "whispering-asylum",
    summary: "Residual hauntings recorded in the East Wing of the abandoned Blackwood Sanitarium.",
    status: "published",
    location_id: locs?.find(l => l.slug === 'blackwood-sanitarium')?.id,
    content: {
      blocks: [
        { type: 'header', data: { text: 'Arrival at Blackwood', level: 2 } },
        { type: 'paragraph', data: { text: 'We established our base of operations in the former admin office at 11:45 PM.' } }
      ]
    },
    featured_image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80"
  }

  const { error: invError } = await supabase
    .from('investigations')
    .upsert([whisperingAsylum], { onConflict: 'slug' })
  
  if (invError) {
    console.error('Error seeding investigations:', invError)
    return
  }
  console.log('✅ Investigations seeded successfully')

  // 4. Create Admin User using Auth Admin API
  console.log('--- Creating Admin User ---')
  const { error: authError } = await supabase.auth.admin.createUser({
    email: 'admin@paranormalvault.org',
    password: 'investigator_2026',
    email_confirm: true
  })

  if (authError) {
    if (authError.message.includes('already exists')) {
      console.log('ℹ️ Admin user already exists')
    } else {
      console.error('Error creating admin user:', authError)
    }
  } else {
    console.log('✅ Admin user created successfully')
  }

  console.log('--- Seed Operation Complete ---')
}

seed()
