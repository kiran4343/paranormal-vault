-- Paranormal Vault Database Schema

-- Investigations
CREATE TABLE investigations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  summary TEXT,
  content JSONB, -- For rich text/builder data
  featured_image TEXT,
  location_id UUID REFERENCES locations(id),
  status TEXT DEFAULT 'published', -- draft, published, archived
  published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  evidence_gallery TEXT[], -- Array of media URLs
  video_url TEXT,
  audio_url TEXT
);

-- Locations
CREATE TABLE locations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  haunting_type TEXT, -- poltergeist, residual, intelligent, etc.
  coordinates POINT,
  address TEXT,
  history TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Stories (Community Submissions)
CREATE TABLE stories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  witness_name TEXT,
  email TEXT,
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  media_urls TEXT[]
);

-- Team
CREATE TABLE team (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  role TEXT,
  bio TEXT,
  image_url TEXT,
  social_links JSONB,
  order_index INTEGER DEFAULT 0
);

-- Podcasts/Videos
CREATE TABLE media_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  type TEXT, -- podcast, video
  url TEXT NOT NULL,
  thumbnail TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Settings
CREATE TABLE site_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  key TEXT UNIQUE NOT NULL,
  value JSONB,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE investigations ENABLE ROW LEVEL SECURITY;
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE team ENABLE ROW LEVEL SECURITY;
ALTER TABLE media_content ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Allow public read on investigations" ON investigations FOR SELECT USING (status = 'published');
CREATE POLICY "Allow public read on locations" ON locations FOR SELECT USING (TRUE);
CREATE POLICY "Allow public read on team" ON team FOR SELECT USING (TRUE);
CREATE POLICY "Allow public read on media_content" ON media_content FOR SELECT USING (TRUE);
