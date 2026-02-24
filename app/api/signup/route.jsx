import db from '../../../lib/db';
import  bcrypt from 'bcrypt'

export async function POST(request) {
  try {
    
   const body = await request.json();

    const { name, email, password } = body;
 const saltRounds = 10; // The cost factor, adjust based on your needs
  const password_hash = await bcrypt.hash(password, saltRounds);
    if (!name||!email || !password_hash) {
      return new Respone(JSON.stringify({ error: 'Missing email or password' }), {
        status: 400,
      });
    }

    const sql = 'INSERT INTO users (name,email, password_hash) VALUES (?, ?,?)';
    const [result] = await db.execute(sql, [email, password_hash]);

    return new Response(JSON.stringify({ message: 'User created', id: result.insertId }), {
      status: 201,
    });
  } catch (error) {
    console.error('Error creating user:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}