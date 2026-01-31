import React, { useState } from 'react';
import One from './assets/One.jpg'
import { Heart, Camera, Video, Sparkles, Calendar, MapPin, Clock, Users, MessageCircle, Music, Gift, Star, Award, Smile, Coffee, Plane, BookOpen, Laugh, Trophy, Zap, ArrowRight, ChevronDown } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Add custom styles for animations
  const styles = `
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    .animate-blob {
      animation: blob 7s infinite;
    }
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    .animation-delay-4000 {
      animation-delay: 4s;
    }
    .animation-delay-1000 {
      animation-delay: 1s;
    }
  `;

  // Sample data - you can replace with your own photos and memories
  const photos = [
    { id: 1, url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400', caption: 'Summer adventures 2024', date: 'July 2024' },
    { id: 2, url: One, caption: 'Summer adventures 2024', date: 'July 2024' },
    { id: 2, url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400', caption: 'Coffee talks and laughs', date: 'March 2024' },
    { id: 3, url: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=400', caption: 'Road trip memories', date: 'June 2024' },
    { id: 4, url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400', caption: 'Late night hangouts', date: 'August 2024' },
    { id: 5, url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400', caption: 'Celebrating together', date: 'September 2024' },
    { id: 6, url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400', caption: 'Just being us', date: 'October 2024' },
  ];

  const videos = [
    { id: 1, title: 'Our First Vlog', thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400', duration: '3:45' },
    { id: 2, title: 'Birthday Surprise', thumbnail: 'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=400', duration: '2:30' },
    { id: 3, title: 'Random Fun Times', thumbnail: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400', duration: '5:12' },
  ];

  const moments = [
    { id: 1, title: 'The Day We Met', description: 'Who knew that random encounter would turn into the best friendship ever?', date: 'January 15, 2020', location: 'Coffee Shop Downtown', icon: Heart },
    { id: 2, title: 'First Road Trip', description: 'Getting lost was half the fun. Remember when we took that wrong turn and ended up at that amazing sunset spot?', date: 'May 22, 2020', location: 'Coast Highway', icon: MapPin },
    { id: 3, title: 'Late Night Deep Talks', description: 'Those 3 AM conversations about life, dreams, and everything in between. Pure magic.', date: 'August 10, 2021', location: 'Your Place', icon: Clock },
    { id: 4, title: 'Supporting Each Other', description: 'Through ups and downs, we\'ve always had each other\'s backs. That\'s what real friendship is.', date: 'March 5, 2022', location: 'Always', icon: Heart },
    { id: 5, title: 'Adventures Continue', description: 'Here\'s to many more memories, laughs, and adventures together!', date: 'Present', location: 'Everywhere', icon: Sparkles },
  ];

  // Extended moments for best memories
  const bestMoments = [
    { id: 1, title: 'Spontaneous Midnight Drive', description: 'When we decided at 11 PM to drive to the beach just to see the sunrise. Best decision ever!', icon: Plane, color: 'from-orange-400 to-pink-500' },
    { id: 2, title: 'Inside Jokes Galore', description: 'We have so many inside jokes that sometimes we communicate in a language only we understand.', icon: Laugh, color: 'from-yellow-400 to-orange-500' },
    { id: 3, title: 'Always There', description: 'Through every breakup, every job change, every family drama - we\'ve been each other\'s rock.', icon: Heart, color: 'from-red-400 to-pink-500' },
    { id: 4, title: 'Adventure Partners', description: 'From hiking mountains to trying weird food - if one of us is doing it, both of us are doing it!', icon: Trophy, color: 'from-green-400 to-teal-500' },
    { id: 5, title: 'Coffee Shop Rituals', description: 'Our weekly coffee meetups where we solve the world\'s problems (and create new ones).', icon: Coffee, color: 'from-amber-600 to-yellow-500' },
    { id: 6, title: 'Music & Dance Sessions', description: 'Random dance parties in the living room at 2 AM because a good song came on.', icon: Music, color: 'from-purple-400 to-pink-500' },
  ];

  // Friendship characteristics
  const friendshipTraits = [
    { trait: 'Trust Level', value: '100%', icon: Heart, color: 'text-red-500' },
    { trait: 'Laugh Meter', value: 'Infinite', icon: Smile, color: 'text-yellow-500' },
    { trait: 'Inside Jokes', value: '847+', icon: MessageCircle, color: 'text-blue-500' },
    { trait: 'Adventures', value: 'Countless', icon: Plane, color: 'text-green-500' },
    { trait: 'Deep Talks', value: 'Every Week', icon: BookOpen, color: 'text-purple-500' },
    { trait: 'Support System', value: 'Unbreakable', icon: Award, color: 'text-orange-500' },
  ];

  const renderHome = () => (
    <div className="space-y-0">
      {/* Enhanced Hero Section with Animation */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 -mt-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center space-y-8 px-4 max-w-5xl">
          <div className="flex justify-center mb-6 space-x-4">
            <Heart className="w-16 h-16 text-pink-500 animate-pulse" fill="currentColor" />
            <Sparkles className="w-16 h-16 text-purple-500 animate-bounce" />
            <Heart className="w-16 h-16 text-pink-500 animate-pulse animation-delay-1000" fill="currentColor" />
          </div>
          
          <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
            Our Friendship
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
            A celebration of the unbreakable bond we share, the countless memories we've created, 
            and the infinite adventures waiting for us
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-12">
            <button 
              onClick={() => setActiveSection('photos')}
              className="group bg-gradient-to-r from-pink-500 to-pink-600 text-white px-10 py-4 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all transform hover:scale-110 shadow-xl hover:shadow-2xl flex items-center gap-3 font-semibold"
            >
              <Camera className="w-6 h-6" />
              View Photos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setActiveSection('moments')}
              className="group bg-gradient-to-r from-purple-500 to-purple-600 text-white px-10 py-4 rounded-full hover:from-purple-600 hover:to-purple-700 transition-all transform hover:scale-110 shadow-xl hover:shadow-2xl flex items-center gap-3 font-semibold"
            >
              <Sparkles className="w-6 h-6" />
              Our Story
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setActiveSection('videos')}
              className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-4 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-110 shadow-xl hover:shadow-2xl flex items-center gap-3 font-semibold"
            >
              <Video className="w-6 h-6" />
              Watch Videos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-600" />
          </div>
        </div>
      </div>

      {/* Friendship Profile Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">Our Friendship Profile</h2>
            <p className="text-xl text-white/90">The metrics that matter</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {friendshipTraits.map((item, index) => {
              const Icon = item.icon;
              return (
         


                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:bg-white/20 transition-all transform hover:scale-105 hover:-rotate-1">
                  <Icon className={`w-12 h-12 ${item.color} mb-4`} />
                  <h3 className="text-xl font-bold text-white mb-2">{item.trait}</h3>
                  <p className="text-3xl font-black text-white">{item.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Best Moments Grid */}
      <div className="bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Star className="w-12 h-12 text-yellow-500" fill="currentColor" />
            </div>
            <h2 className="text-5xl font-black text-gray-800 mb-4">Best Moments Ever</h2>
            <p className="text-xl text-gray-600">The memories that define us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestMoments.map((moment) => {
              const Icon = moment.icon;
              return (
                <div key={moment.id} className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 hover:-rotate-2 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${moment.color} rounded-full filter blur-2xl opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                  <div className="relative">
                    <div className={`bg-gradient-to-br ${moment.color} rounded-2xl p-4 inline-block mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{moment.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{moment.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button 
              onClick={() => setActiveSection('moments')}
              className="group bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white px-12 py-5 rounded-full hover:from-yellow-500 hover:via-orange-600 hover:to-pink-600 transition-all transform hover:scale-110 shadow-2xl font-bold text-lg flex items-center gap-3 mx-auto"
            >
              See Complete Timeline
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats with Enhanced Design */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">By The Numbers</h2>
            <p className="text-xl text-white/90">Our friendship in statistics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 text-center transform hover:scale-110 transition-all border-2 border-white/20 hover:bg-white/20">
              <Camera className="w-16 h-16 text-pink-300 mx-auto mb-6" />
              <h3 className="text-5xl font-black text-white mb-3">{photos.length}+</h3>
              <p className="text-white/90 text-lg font-semibold">Photos Captured</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 text-center transform hover:scale-110 transition-all border-2 border-white/20 hover:bg-white/20">
              <Calendar className="w-16 h-16 text-purple-300 mx-auto mb-6" />
              <h3 className="text-5xl font-black text-white mb-3">1,460+</h3>
              <p className="text-white/90 text-lg font-semibold">Days Together</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 text-center transform hover:scale-110 transition-all border-2 border-white/20 hover:bg-white/20">
              <Laugh className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
              <h3 className="text-5xl font-black text-white mb-3">∞</h3>
              <p className="text-white/90 text-lg font-semibold">Laughs Shared</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 text-center transform hover:scale-110 transition-all border-2 border-white/20 hover:bg-white/20">
              <Sparkles className="w-16 h-16 text-blue-300 mx-auto mb-6" />
              <h3 className="text-5xl font-black text-white mb-3">∞</h3>
              <p className="text-white/90 text-lg font-semibold">More To Come</p>
            </div>
          </div>
        </div>
      </div>

      {/* What Makes Us Special */}
      <div className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <Users className="w-16 h-16 text-pink-500 mx-auto mb-6" />
            <h2 className="text-5xl font-black text-gray-800 mb-6">What Makes Us Special</h2>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl p-12 border-4 border-pink-200">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              True friendship isn't about being inseparable—it's about being separated and nothing changes. 
              Through every laugh that echoed through empty streets at midnight, every tear wiped away with 
              understanding, every spontaneous adventure that turned into legendary stories, and every quiet 
              moment of comfortable silence, we've built something truly extraordinary.
            </p>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              This website is more than just a collection of photos and videos. It's a living testament to 
              our journey together—a digital scrapbook of inside jokes that make us burst into laughter in 
              public, deep conversations that lasted until dawn, supporting each other through life's ups 
              and downs, and the countless little moments that make our friendship one of a kind.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed font-semibold text-center">
              Here's to the memories we've made and the countless adventures still waiting for us. 
              Forever grateful for this incredible bond we share. 💜
            </p>
          </div>
        </div>
      </div>

      {/* Quick Navigation Cards */}
      <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-800 mb-4">Explore Our Journey</h2>
            <p className="text-xl text-gray-600">Dive deeper into our story</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <button 
              onClick={() => setActiveSection('photos')}
              className="group bg-gradient-to-br from-pink-400 to-pink-600 rounded-3xl p-12 text-left transform hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
            >
              <Camera className="w-16 h-16 text-white mb-6" />
              <h3 className="text-3xl font-black text-white mb-4">Photo Gallery</h3>
              <p className="text-white/90 text-lg mb-6">Browse through our captured moments and relive the memories</p>
              <div className="flex items-center gap-2 text-white font-bold">
                Explore Photos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </button>

            <button 
              onClick={() => setActiveSection('videos')}
              className="group bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl p-12 text-left transform hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
            >
              <Video className="w-16 h-16 text-white mb-6" />
              <h3 className="text-3xl font-black text-white mb-4">Video Collection</h3>
              <p className="text-white/90 text-lg mb-6">Watch our adventures come to life in motion</p>
              <div className="flex items-center gap-2 text-white font-bold">
                Watch Videos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </button>

            <button 
              onClick={() => setActiveSection('moments')}
              className="group bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-12 text-left transform hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
            >
              <Sparkles className="w-16 h-16 text-white mb-6" />
              <h3 className="text-3xl font-black text-white mb-4">Timeline</h3>
              <p className="text-white/90 text-lg mb-6">Follow our journey from the beginning to now</p>
              <div className="flex items-center gap-2 text-white font-bold">
                View Timeline
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPhotos = () => (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-800">Photo Gallery</h1>
        <p className="text-xl text-gray-600">Every picture tells a story</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
        {photos.map((photo) => (
          <div key={photo.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
            <img 
              src={photo.url} 
              alt={photo.caption}
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-semibold">{photo.caption}</h3>
                <p className="text-sm text-gray-300">{photo.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderVideos = () => (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-800">Video Memories</h1>
        <p className="text-xl text-gray-600">Moments that came to life</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
        {videos.map((video) => (
          <div key={video.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer">
            <img 
              src={video.thumbnail} 
              alt={video.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="bg-white/90 rounded-full p-6 group-hover:scale-110 transition-transform">
                <Video className="w-12 h-12 text-pink-500" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-xl font-semibold">{video.title}</h3>
              <p className="text-sm text-gray-300">{video.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMoments = () => (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-800">Our Journey</h1>
        <p className="text-xl text-gray-600">The timeline of our friendship</p>
      </div>
      
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-12">
          {moments.map((moment, index) => {
            const Icon = moment.icon;
            return (
              <div key={moment.id} className="relative pl-8 border-l-4 border-pink-300">
                <div className="absolute -left-6 top-0 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full p-3 shadow-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{moment.date}</span>
                    <span className="mx-2">•</span>
                    <MapPin className="w-4 h-4" />
                    <span>{moment.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{moment.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{moment.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <style>{styles}</style>
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <Heart className="w-8 h-8 text-pink-500" fill="currentColor" />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Our Bond
              </span>
            </div>
            <div className="flex gap-2">
              {[
                { id: 'home', label: 'Home', icon: Heart },
                { id: 'photos', label: 'Photos', icon: Camera },
                { id: 'videos', label: 'Videos', icon: Video },
                { id: 'moments', label: 'Moments', icon: Sparkles }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-12">
        {activeSection === 'home' && renderHome()}
        {activeSection === 'photos' && renderPhotos()}
        {activeSection === 'videos' && renderVideos()}
        {activeSection === 'moments' && renderMoments()}
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Heart className="w-8 h-8 text-pink-500 mx-auto mb-3" fill="currentColor" />
          <p className="text-gray-600">Made with love to celebrate an amazing friendship</p>
          <p className="text-sm text-gray-400 mt-2">Forever grateful for you</p>
        </div>
      </footer>
    </div>
  );
}


