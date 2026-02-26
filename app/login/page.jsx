import { signIn } from '../../lib/auth';
import { redirect, RedirectType } from 'next/navigation'

export default async function SignInForm() {
  // Server Action for the form
  async function handleLogin(formData) {
    'use server';
try{
    const email = formData.get('email');
    const password = formData.get('password');
    const result = await signIn('credentials', {
      email,
      password,
      redirect: true // we handle redirect manually
    });

    if (result?.ok) {

    } else {
      console.log('error')
    }
  }catch(error){
    console.log(error)
  }
      redirect('/dashboard')

  }

  return (
    <form className='form' action={handleLogin}>
      <label htmlFor="email">Email:</label>
      <input placeholder="Email" name="email" type="email" required /><br/>
      <label htmlFor="password">Password:</label>
      <input placeholder= 'Password'name="password" type="password" required /><br/>
      <button className= "button"type="submit">Sign in</button><br/>
    </form>
  );
}
