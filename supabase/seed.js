require('dotenv').config()
const { createClient } = require('@supabase/supabase-js')
const ws = require('ws')

async function seed() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env')
    process.exit(1)
  }

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false },
    realtime: { transport: ws }
  })

  console.log('--- Starting Seed Operation ---')

  // 1. Seed Locations
  const locations = [
    {
      name: "Blackwood Sanitarium",
      slug: "blackwood-sanitarium",
      description: "A decaying asylum in the Victorian highlands.",
      haunting_type: "Residual / Poltergeist",
      address: "Blackwood, Victoria, AU",
      history: "Constructed in 1890, the asylum was known for its experimental therapies."
    },
    {
      name: "Greyfriars Kirkyard",
      slug: "greyfriars-shadows",
      description: "One of the most haunted graveyards in the world.",
      haunting_type: "Intelligent / Poltergeist",
      address: "Edinburgh, Scotland",
      history: "Site of the 17th-century Covenanters' Prison."
    }
  ]

  const { error: locError } = await supabase
    .from('locations')
    .upsert(locations, { onConflict: 'slug' })
  
  if (locError) {
    console.error('Error seeding locations:', locError)
  } else {
    console.log('✅ Locations seeded successfully')
  }

  // 2. Create Admin User
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
