import {createClient} from '@supabase/supabase-js';

const supabaseUrl = "https://jyhtkujmywvwubtrinde.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5aHRrdWpteXd2d3VidHJpbmRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwOTE2MzcsImV4cCI6MjA1NDY2NzYzN30.RnqQwNwlAabwD7GbmHgxBBT0C4JvOxk277Lv198Sts4";

export const supabase = createClient(supabaseUrl, supabaseKey);