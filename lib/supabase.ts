import { createBrowserClient } from '@supabase/ssr';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    'Missing Supabase environment variables. Make sure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY are set.'
  );
}

/**
 * Browser client for client-side operations
 * Use this for authentication and real-time subscriptions
 */
export function createClient() {
  return createBrowserClient(supabaseUrl, supabaseKey);
}

/**
 * Server client for server-side operations
 * Use this for protected API routes and server components
 */
export async function createServerSupabaseClient() {
  const cookieStore = await cookies();

  return createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware handling cookie setting.
        }
      },
    },
  });
}

/**
 * Types for database tables
 * Update these as you create tables in Supabase
 */
export interface User {
  id: string;
  email: string;
  role: 'customer' | 'seller' | 'delivery_partner' | 'admin';
  created_at: string;
  updated_at: string;
}

export interface Shop {
  id: string;
  seller_id: string;
  name: string;
  description: string;
  logo_url: string;
  banner_url: string;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  shop_id: string;
  name: string;
  description: string;
  price: number;
  discount_price: number | null;
  image_urls: string[];
  category: string;
  stock: number;
  created_at: string;
  updated_at: string;
}

export interface CartItem {
  id: string;
  customer_id: string;
  product_id: string;
  quantity: number;
  created_at: string;
  updated_at: string;
}

export interface Order {
  id: string;
  customer_id: string;
  shop_id: string;
  delivery_partner_id: string | null;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'out_for_delivery' | 'delivered' | 'cancelled';
  total_amount: number;
  delivery_fee: number;
  notes: string | null;
  delivery_address: string;
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  price: number;
}

export interface DeliveryPartner {
  id: string;
  user_id: string;
  phone: string;
  vehicle_type: string;
  vehicle_number: string;
  status: 'available' | 'busy' | 'offline';
  current_location: { lat: number; lng: number } | null;
  created_at: string;
  updated_at: string;
}
