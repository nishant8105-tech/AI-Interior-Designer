import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "your_supabase_url";
const supabaseServiceRoleKey = "your_supabase_service_role_key";
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

export { supabaseAdmin as s };
