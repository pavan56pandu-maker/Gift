import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Lock, Mail, User, Sparkles, Trees, Sun, Cloud, Leaf, Mountain, Bird } from 'lucide-react';
import App from './App.jsx';
export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
       
    if(email === currectEmail && password === currectPassword){
      navigate('/App');
    }else{
      setError("Password Marchipoyava PandiPilla");
    }
  
    console.log('Form submitted:', formData);
    // Add your login/signup logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const [email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[error, setError] = useState("");
  const navigate = useNavigate();



    const currectEmail = "Dumbuuu@gmail.com";
  const currectPassword = "PandiPilla";
  // const handleSubmit = (e)=>{
  //    e.preventDefault();

  //   // if(email === currectEmail && password === currectPassword){
  //   if(email && password ){
  //     navigate('/App');
  //   }else{
  //     setError("Password Marchipoyava PandiPilla");
  //   }
  // };

  // Custom animation styles
  const styles = `
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(5deg); }
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes shimmer {
      0% { background-position: -1000px 0; }
      100% { background-position: 1000px 0; }
    }
    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 20px rgba(236, 72, 153, 0.4); }
      50% { box-shadow: 0 0 40px rgba(236, 72, 153, 0.8); }
    }
    @keyframes drift {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(10px, -10px); }
      50% { transform: translate(-5px, -20px); }
      75% { transform: translate(-10px, -5px); }
    }
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-fadeIn { animation: fadeIn 1s ease-out; }
    .animate-shimmer {
      background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
      background-size: 1000px 100%;
      animation: shimmer 3s infinite;
    }
    .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
    .animate-drift { animation: drift 8s ease-in-out infinite; }
    .animation-delay-1 { animation-delay: 1s; }
    .animation-delay-2 { animation-delay: 2s; }
    .animation-delay-3 { animation-delay: 3s; }
    .animation-delay-4 { animation-delay: 4s; }
  `;

  return (
   
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <style>{styles}</style>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float animation-delay-2"></div>
        <div className="absolute -bottom-20 left-40 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float animation-delay-4"></div>
        
        {/* Nature Elements */}
        <Sun className="absolute top-10 right-10 w-16 h-16 text-yellow-400 animate-float" />
        <Cloud className="absolute top-32 left-1/4 w-20 h-20 text-white/60 animate-drift" />
        <Cloud className="absolute top-48 right-1/3 w-16 h-16 text-white/50 animate-drift animation-delay-2" />
        <Bird className="absolute top-24 left-1/3 w-8 h-8 text-gray-700 animate-drift animation-delay-1" />
        <Bird className="absolute top-56 right-1/4 w-6 h-6 text-gray-600 animate-drift animation-delay-3" />
        
        {/* Ground Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-200/40 to-transparent"></div>
        <Trees className="absolute bottom-10 left-20 w-24 h-24 text-green-600/50 animate-float" />
        <Mountain className="absolute bottom-0 right-32 w-32 h-32 text-gray-400/30 animate-float animation-delay-1" />
        <Leaf className="absolute bottom-40 left-1/3 w-10 h-10 text-green-500 animate-drift" />
        <Leaf className="absolute bottom-60 right-1/4 w-8 h-8 text-green-400 animate-drift animation-delay-2" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Illustration & Message */}
          <div className="text-center lg:text-left space-y-8 animate-fadeIn">
            {/* Romantic Illustration Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-3xl p-12 shadow-2xl border-4 border-white/50 backdrop-blur-sm">
                <div className="relative aspect-square max-w-md mx-auto">
                  {/* Boy and Girl Silhouette - Creative representation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* Background Scene */}
                      <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-pink-100 to-green-200 rounded-2xl overflow-hidden">
                        {/* Sun */}
                        <div className="absolute top-8 right-8 w-20 h-20 bg-yellow-300 rounded-full shadow-lg animate-pulse"></div>
                        
                        {/* Mountains */}
                        <div className="absolute bottom-0 left-0 right-0">
                          <svg viewBox="0 0 400 200" className="w-full h-48">
                            <path d="M0,200 L100,100 L200,150 L300,80 L400,140 L400,200 Z" fill="#86efac" opacity="0.6"/>
                            <path d="M0,200 L80,130 L180,170 L320,100 L400,160 L400,200 Z" fill="#4ade80" opacity="0.7"/>
                          </svg>
                        </div>
                        
                        {/* Trees */}
                        <div className="absolute bottom-16 left-8">
                          <div className="w-4 h-12 bg-amber-800 rounded-sm"></div>
                          <div className="absolute -top-8 -left-4 w-12 h-12 bg-green-600 rounded-full"></div>
                        </div>
                        <div className="absolute bottom-12 right-16">
                          <div className="w-3 h-10 bg-amber-800 rounded-sm"></div>
                          <div className="absolute -top-6 -left-3 w-10 h-10 bg-green-500 rounded-full"></div>
                        </div>
                        
                        {/* Boy and Girl Figures */}
                        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex items-end gap-2">
                          {/* Boy */}
                          <div className="relative animate-float">
                            {/* Head */}
                            <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full border-2 border-amber-400 mb-1">
                              <div className="absolute top-2 left-3 w-2 h-2 bg-gray-800 rounded-full"></div>
                              <div className="absolute top-2 right-3 w-2 h-2 bg-gray-800 rounded-full"></div>
                              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-gray-700 rounded-full"></div>
                            </div>
                            {/* Body */}
                            <div className="w-14 h-20 bg-gradient-to-b from-blue-500 to-blue-600 rounded-lg"></div>
                            {/* Arms */}
                            <div className="absolute top-14 -left-3 w-3 h-12 bg-blue-500 rounded-full transform -rotate-45"></div>
                            <div className="absolute top-14 -right-3 w-3 h-12 bg-blue-500 rounded-full transform rotate-12"></div>
                            {/* Legs */}
                            <div className="absolute -bottom-10 left-2 w-4 h-12 bg-gray-700 rounded-lg"></div>
                            <div className="absolute -bottom-10 right-2 w-4 h-12 bg-gray-700 rounded-lg"></div>
                          </div>
                          
                          {/* Girl */}
                          <div className="relative animate-float animation-delay-1">
                            {/* Head */}
                            <div className="w-12 h-12 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full border-2 border-pink-400 mb-1">
                              <div className="absolute top-2 left-3 w-2 h-2 bg-gray-800 rounded-full"></div>
                              <div className="absolute top-2 right-3 w-2 h-2 bg-gray-800 rounded-full"></div>
                              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-pink-600 rounded-full"></div>
                              {/* Hair/Bow */}
                              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-pink-500 rounded-full"></div>
                            </div>
                            {/* Body */}
                            <div className="w-14 h-20 bg-gradient-to-b from-pink-400 to-pink-500 rounded-lg rounded-b-full"></div>
                            {/* Arms */}
                            <div className="absolute top-14 -left-3 w-3 h-12 bg-pink-400 rounded-full transform -rotate-12"></div>
                            <div className="absolute top-14 -right-3 w-3 h-12 bg-pink-400 rounded-full transform rotate-45"></div>
                            {/* Legs */}
                            <div className="absolute -bottom-10 left-2 w-4 h-12 bg-pink-300 rounded-lg"></div>
                            <div className="absolute -bottom-10 right-2 w-4 h-12 bg-pink-300 rounded-lg"></div>
                          </div>
                        </div>
                        
                        {/* Hearts floating around them */}
                        <Heart className="absolute top-32 left-1/3 w-6 h-6 text-pink-500 animate-float" fill="currentColor" />
                        <Heart className="absolute top-28 right-1/3 w-4 h-4 text-red-500 animate-float animation-delay-1" fill="currentColor" />
                        <Heart className="absolute top-40 left-1/2 w-5 h-5 text-pink-400 animate-float animation-delay-2" fill="currentColor" />
                        
                        {/* Sparkles */}
                        <Sparkles className="absolute top-16 left-16 w-8 h-8 text-yellow-300 animate-drift" />
                        <Sparkles className="absolute top-20 right-20 w-6 h-6 text-purple-300 animate-drift animation-delay-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements around illustration */}
              <div className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-xl animate-float">
                <Heart className="w-8 h-8 text-pink-500" fill="currentColor" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-full p-4 shadow-xl animate-float animation-delay-2">
                <Sparkles className="w-8 h-8 text-purple-500" />
              </div>
            </div>
            
            {/* Message */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Our Special Bond
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Like nature's perfect harmony, our friendship grows stronger every day. 
                Join us in this beautiful journey together! 🌸
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <Heart className="w-5 h-5 text-pink-500" fill="currentColor" />
                  <span className="text-gray-700 font-semibold">Unbreakable Bond</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <Trees className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 font-semibold">Growing Together</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login/Signup Form */}
          <div className="animate-fadeIn animation-delay-1">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-12 border-4 border-white/50 animate-pulse-glow">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-block p-4 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full mb-4 shadow-lg animate-float">
                  <Heart className="w-12 h-12 text-white" fill="currentColor" />
                </div>
                <h2 className="text-4xl font-black text-gray-800 mb-2">
                  {isSignUp ? 'Join Our Journey' : 'Welcome Back'}
                </h2>
                <p className="text-gray-600 text-lg">
                  {isSignUp ? 'Create your account to celebrate with us' : 'Continue your beautiful journey'}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {isSignUp && (
                  <div className="relative group">
                    <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                      <User className="w-5 h-5 text-purple-500" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your beautiful name"
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all outline-none text-lg"
                      required={isSignUp}
                    />
                    <div className="absolute right-4 top-12 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Sparkles className="w-5 h-5 text-purple-400" />
                    </div>
                  </div>
                )}

                <div className="relative group">
                  <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-pink-500" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-pink-500 focus:ring-4 focus:ring-pink-200 transition-all outline-none text-lg"
                    required
                  />
                  <div className="absolute right-4 top-12 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="w-5 h-5 text-pink-400" />
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-blue-500" />
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all outline-none text-lg"
                    required
                  />
                  <div className="absolute right-4 top-12 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="w-5 h-5 text-blue-400" />
                  </div>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                </div>

                {!isSignUp && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="w-5 h-5 rounded border-2 border-gray-300 text-pink-500 focus:ring-2 focus:ring-pink-200" />
                      <span className="text-gray-600 group-hover:text-gray-800 transition-colors">Remember me</span>
                    </label>
                    <button type="button" className="text-pink-500 hover:text-pink-600 font-semibold transition-colors">
                      Forgot password?
                    </button>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white text-xl font-bold py-5 rounded-2xl hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group"
                >
                  <span>{isSignUp ? 'Create Account' : 'Sign In'}</span>
                  <Heart className="w-6 h-6 group-hover:scale-125 transition-transform" fill="currentColor" />
                </button>

                {/* Toggle Sign Up/Sign In */}
                <div className="text-center pt-4 border-t-2 border-gray-100">
                  <button
                    type="button"
                    // onClick={() => setIsSignUp(!isSignUp)}
                    onClick={handleSubmit}
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    {isSignUp ? (
                      <span>Already have an account? <span className="text-pink-500 font-bold">Sign In</span></span>
                    ) : (
                      <span>Don't have an account? <span className="text-purple-500 font-bold">Sign Up</span></span>
                    )}
                  </button>
                </div>

                {/* Social Login */}
                <div className="pt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t-2 border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500 font-semibold">Or continue with</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <button type="button" className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-pink-300 hover:bg-pink-50 transition-all group">
                      <svg className="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="#EA4335" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                      </svg>
                      <span className="text-sm font-semibold text-gray-700 group-hover:text-pink-600">Google</span>
                    </button>
                    <button type="button" className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all group">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1877F2">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600">Facebook</span>
                    </button>
                    <button type="button" className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all group">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#833AB4">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                      <span className="text-sm font-semibold text-gray-700 group-hover:text-purple-600">Instagram</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-green-300/30 to-transparent pointer-events-none"></div>
    </div>
  );
}