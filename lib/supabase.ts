import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// دالة لجلب أي متغير من جدول bot_config في Supabase
export async function getBotConfig(keyName: string): Promise<string | null> {
  try {
    const { data, error } = await supabase
      .from('bot_config')
      .select('config_value')
      .eq('config_key', keyName)
      .single()

    if (error) {
      console.error(`Error fetching config for ${keyName}:`, error.message)
      return null
    }

    return data?.config_value || null
  } catch (err) {
    console.error('Unexpected error fetching bot config:', err)
    return null
  }
}
