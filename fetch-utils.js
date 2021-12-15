const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUyNjM1OCwiZXhwIjoxOTU1MTAyMzU4fQ.Pr7tivEl7Ujfr0Uwk9DYonNq9YsbvLUr8jDx8h3zOKE';


const SUPABASE_URL = 'https://tpqivbvxllyooxgwtbhq.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getMovies() {
    const response = await client
        .from('Movie Tracker')
        .select();

    return response.data;
}

export async function getMovie(id) {
    const response = await client
        .from('Movie Tracker')
        .select()
        .match({ id })
        .single();

    return response.data;
}