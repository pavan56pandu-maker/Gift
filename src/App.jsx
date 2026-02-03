import React, { useState } from 'react';
import Eight from './assets/Eight.jpg'
import Six from './assets/Six.jpg'
import One from './assets/One.jpg'
import Two from './assets/Two.jpg'
import Three from './assets/Three.jpg'
import Four from './assets/Four.jpg'
import Five from './assets/Five.jpg'
import Seven from './assets/Seven.jpg'
import Nine from './assets/Nine.jpg'
import Ten from './assets/Ten.jpg'
import Zoo1 from './assets/Zoo1.jpg'
import Zoo2 from './assets/Zoo2.jpg'
import Zoo3 from './assets/Zoo3.jpg'
import Zoo4 from './assets/Zoo4.jpg'
import Zoo5 from './assets/Zoo5.jpg'
import Zoo6 from './assets/Zoo6.jpg'
import Zoo7 from './assets/Zoo7.jpg'
import Zoo8 from './assets/Zoo8.jpg'
import TTd1 from './assets/TTd1.jpg'
import TTd2 from './assets/TTd2.jpg'
import Khs1 from './assets/Khs1.jpg'
import Khs2 from './assets/Khs2.jpg'
import Bd2 from './assets/Bd2.jpg'
import Bd3 from './assets/Bd3.jpg'
import Bd4 from './assets/Bd4.jpg'
import Clg from './assets/Clg.jpg'
import Clg2 from './assets/Clg2.jpg'
import Fd from './assets/Fd.jpg'
import New1 from './assets/New1.jpg'
import New2 from './assets/New2.jpg'
import New3 from './assets/New3.jpg'
import New4 from './assets/New4.jpg'
import New5 from './assets/New5.jpg'
import New6 from './assets/New6.jpg'
import New7 from './assets/New7.jpg'
import New8 from './assets/New8.jpg'
import New9 from './assets/New9.jpg'
import New10 from './assets/New10.jpg'
import New11 from './assets/New11.jpg'
import New12 from './assets/New12.jpg'
import New13 from './assets/New13.jpg'
import New14 from './assets/New14.jpg'
import New15 from './assets/New15.jpg'
import New16 from './assets/New16.jpg'
import New17 from './assets/New17.jpg'
import New18 from './assets/New18.jpg'
import New19 from './assets/New19.jpg'


import Abc from  './assets/video/Abc.mp4' 
import Dog from  './assets/video/Dog.mp4'
import Song from './assets/video/Song.mp4'
import Ball from './assets/video/Ball.mp4'
import Cat from './assets/video/Cat.mp4'
import Dance from './assets/video/Dance.mp4'
import Cell from './assets/video/Cell.mp4'
import Fish from './assets/video/Fish.mp4'
import Rat from './assets/video/Rat.mp4'
import Orange from './assets/video/Orange.mp4'
import Meow from './assets/video/Meow.mp4'
import Bd from './assets/video/Bd.mp4'

import { Heart, Camera, Video, Sparkles, Calendar, MapPin, Clock, Users, MessageCircle, Music, Gift, Star, Award, Smile, Coffee, Plane, BookOpen, Laugh, Trophy, Zap, ArrowRight, ChevronDown } from 'lucide-react';
import { Download } from "lucide-react";
export default function App() {
  const [activeSection, setActiveSection] = useState('home');
const downloadImage = async (url, filename) => {
  const response = await fetch(url);
  const blob = await response.blob();
  const blobUrl = window.URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = blobUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  window.URL.revokeObjectURL(blobUrl);
};

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
    { id: 1, url: Eight, caption: 'Summer adventures 2024', date: '5 June 2023' },
    { id: 3, url: Three, caption: 'Summer adventures 2024', date: '5 June 2023' },
    { id: 6, url: Six, caption: 'Late night hangouts', date: '6 June 2023' },
    { id: 9, url: Nine, caption: 'Just being us', date: '9 November 2023' },
    { id: 4, url: Four, caption: 'Coffee talks and laughs', date: '11 November 2023' },
    { id: 5, url: Five, caption: 'Road trip memories', date: '9 December 2023' },
    { id: 8, url: One, caption: 'Just being us', date: '9 December 2023' },
    { id: 7, url: Seven, caption: 'Celebrating together', date: '16 March 2024' },
    { id: 2, url: Two, caption: 'Just being us', date: '4 May 2024' },
    { id: 10, url: Ten, caption: 'Just being us', date: '25 March 2025' },
    { id: 14, url: Fd, caption: 'Just being us', date: '16 April 2025' },
    { id: 11, url: TTd1, caption: 'Just being us', date: '4 June 2025' },
    { id: 15, url: TTd2, caption: 'Just being us', date: '4 June 2025' },
    { id: 16, url: Khs1, caption: 'Just being us', date: '11 October 2025' },
    { id: 17, url: Khs2, caption: 'Just being us', date: '11 October2025' },
    { id: 18, url: Bd4, caption: 'Just being us', date: '4 November 2025' },
    { id: 19, url: Bd3, caption: 'Just being us', date: '4 November 2025' },
    { id: 20, url: Bd2, caption: 'Just being us', date: '4 November 2025' },
    { id: 12, url: Clg, caption: 'Just being us', date: '24 November 2025' },
    { id: 13, url: Clg2, caption: 'Just being us', date: '24 November 2025' },
    { id: 21, url: Zoo1, caption: 'Just being us', date: '28 November 2025' },
    { id: 22, url: Zoo2, caption: 'Just being us', date: '28 November 2025' },
    { id: 23, url: Zoo3, caption: 'Just being us', date: '28 November 2025' },
    { id: 24, url: Zoo4, caption: 'Just being us', date: '28 November 2025' },
    { id: 25, url: Zoo5, caption: 'Just being us', date: '28 November 2025' },
    { id: 26, url: Zoo6, caption: 'Just being us', date: '28 November 2025' },
    { id: 27, url: Zoo7, caption: 'Just being us', date: '28 November 2025' },
    { id: 28, url: Zoo8, caption: 'Just being us', date: '28 November 2025' },
    { id: 29, url: New1, caption: 'Just being us', date: '14 December 2025' },
    { id: 30, url: New2, caption: 'Just being us', date: '14 December 2025' },
    { id: 31, url: New3, caption: 'Just being us', date: '14 December 2025' },
    { id: 32, url: New4, caption: 'Just being us', date: '14 December 2025' },
    { id: 33, url: New5, caption: 'Just being us', date: '14 December 2025' },
    { id: 34, url: New6, caption: 'Just being us', date: '14 December 2025' },
    { id: 35, url: New7, caption: 'Just being us', date: '14 December 2025' },
    { id: 36, url: New8, caption: 'Just being us', date: '18 December 2025' },
    { id: 37, url: New9, caption: 'Just being us', date: '18 December 2025' },
    { id: 38, url: New10, caption: 'Just being us', date: '18 December 2025' },
    { id: 39, url: New11, caption: 'Just being us', date: '18 December 2025' },
    { id: 40, url: New12, caption: 'Just being us', date: '18 December 2025' },
    { id: 41, url: New13, caption: 'Just being us', date: '18 December 2025' },
    { id: 42, url: New14, caption: 'Just being us', date: '18 December 2025' },
    { id: 43, url: New15, caption: 'Just being us', date: '21 January 2026' },
    { id: 44, url: New16, caption: 'Just being us', date: '21 January 2026' },
    { id: 45, url: New17, caption: 'Just being us', date: '21 January 2026' },
    { id: 46, url: New18, caption: 'Just being us', date: '21 January 2026' },
    { id: 47, url: New19, caption: 'Just being us', date: '21 January 2026' },
  ];

  const videos = [
    { id: 1, src: Dog, title: 'Our First Vlog', thumbnail: One, duration: '3:45' },
    { id: 2, src: Abc, title: 'Birthday Surprise', thumbnail: 'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=400', duration: '2:30' },
    { id: 3, src: Song, title: 'Random Fun Times', thumbnail: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400', duration: '5:12' },
    { id: 4, src: Cell, title: 'Random Fun Times', thumbnail: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400', duration: '5:12' },
    { id: 5, src: Ball, title: 'Random Fun Times', thumbnail: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400', duration: '5:12' },
    { id: 6, src: Dance, title: 'Random Fun Times', thumbnail: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400', duration: '5:12' },
    { id: 7, src: Cat, title: 'Random Fun Times', thumbnail: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400', duration: '5:12' },
    { id: 8, src: Fish, title: 'Random Fun Times', thumbnail: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400', duration: '5:12' },
    { id: 9, src: Rat, title: 'Random Fun Times', thumbnail: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400', duration: '5:12' },
    { id: 10, src: Orange, title: 'Random Fun Times', thumbnail: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400', duration: '5:12' },
    { id: 11, src: Meow, title: 'Random Fun Times', thumbnail: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400', duration: '5:12' },
    { id: 12, src: Bd, title: 'Random Fun Times', thumbnail: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400', duration: '5:12' },
 
 
 
 
 
  ];
  const [selectedVideo, setSelectedVideo] = useState(null);


  const moments = [
    { id: 1, title: 'The Day We Met', description: 'As far as I think, that was our first meeting during the engineering workshop', date: 'October 2, 2022', location: 'Eng Work Shop', icon: Heart },
    { id: 2, title: 'First Road Trip', description: 'Our first adventure together, exploring new places and making unforgettable memories.', date: 'May 4, 2024', location: 'Ramapuram', icon: MapPin },
    { id: 3, title: 'Dare Trip', description: 'Our first dare trip together, full of excitement and surprises.', date: 'June 4, 2025', location: 'Tirumala', icon: MapPin },
    { id: 4, title: 'Everlasting Memories', description: 'The memories we made together are timeless and precious.', date: 'October 11, 2025', location: 'SriKalahasti', icon: MapPin },
    { id: 5, title: 'Birthday Special', description: 'unexpected Things happened on your birthday and that movement of slipping on the bike is personal', date: 'November 4, 2025', location: 'Tirupati', icon: MapPin },
    { id: 6, title: 'Zoo Park Fun', description: 'Our fun-filled day at the zoo, filled with laughter and excitement.', date: 'November 28, 2025', location: 'Zoo Park', icon: MapPin },
    { id: 7, title: 'Tirumala ', description: 'Our visit to Tirumala was filled with joy and spiritual vibes.Baagundi😋', date: 'December 14, 2025', location: 'Tirumala', icon: MapPin },
     { id: 8, title: 'Enjoying Nature', description: 'Our peaceful moments in nature, surrounded by greenery and calm.and then went to Dmart and Movie', date: 'January 21, 2026', location: 'Mamandur', icon: MapPin },
    { id: 9, title: 'Late Night Deep Talks', description: 'Those late night conversations that went on for hours, sharing thoughts, dreams, and secrets.', date: 'Always', location: 'Instagram', icon: Clock },
    { id: 10, title: 'Supporting Each Other', description: 'Through every challenge and triumph, we supported each other unconditionally.', date: 'Every Moment', location: 'Always', icon: Heart },
    { id: 11, title: 'Adventures Continue', description: 'The journey continues with new adventures and shared experiences.', date: 'Present', location: 'Everywhere', icon: Sparkles },
  ];

  // Extended moments for best memories
  const bestMoments = [
    { id: 1, title: 'Spontaneous Bike Drive', description: 'Two friends, one bike, and endless roads—roaring into the world with fearless hearts.Laughter in the wind, memories written in every mile.', icon: Plane, color: 'from-orange-400 to-pink-500' },
    { id: 2, title: 'Inside Jokes Galore', description: 'Laughing at jokes no one else understands and smiling without reasons.Our inside jokes are memories wrapped in laughter only we can decode.', icon: Laugh, color: 'from-yellow-400 to-orange-500' },
    { id: 3, title: 'Always There', description: 'Through every high and low, we stood side by side without questions.Not just friends—always there, always real, always together.', icon: Heart, color: 'from-red-400 to-pink-500' },
    { id: 4, title: 'Adventure Partners', description: 'From unknown roads to thrilling places, we chase adventures side by side.New environments, wild vibes and Every adventure felt safer, crazier, and more meaningful', icon: Trophy, color: 'from-green-400 to-teal-500' },
    { id: 5, title: 'Coffee Shop Rituals', description: 'Coffee stops, long conversations, random restaurants, and street-side shops.These small coffee breaks turned into big memories.', icon: Coffee, color: 'from-amber-600 to-yellow-500' },
    { id: 6, title: 'Music & Dance Sessions', description: 'Music on full volume, singing wrong lyrics, dancing without rules.We don’t need perfection—just vibes and moments.', icon: Music, color: 'from-purple-400 to-pink-500' },
  ];

  // Friendship characteristics
  const friendshipTraits = [
    { trait: 'Trust Level', value: '100%', icon: Heart, color: 'text-red-500' },
    { trait: 'Laugh Meter', value: 'Infinite', icon: Smile, color: 'text-yellow-500' },
    { trait: 'Inside Jokes', value: '10000+', icon: MessageCircle, color: 'text-blue-500' },
    { trait: 'Adventures', value: 'Countless', icon: Plane, color: 'text-green-500' },
    { trait: 'Deep Talks', value: 'Every Day', icon: BookOpen, color: 'text-purple-500' },
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
            Two souls chasing the same horizon 🌅
Where laughter echoes and worries fade away 😄
Every journey feels like home when we’re together 💫
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
              <h3 className="text-5xl font-black text-white mb-3">300+</h3>
              <p className="text-white/90 text-lg font-semibold">Photos Captured</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 text-center transform hover:scale-110 transition-all border-2 border-white/20 hover:bg-white/20">
              <Calendar className="w-16 h-16 text-purple-300 mx-auto mb-6" />
              <h3 className="text-5xl font-black text-white mb-3">1050+</h3>
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
                    What makes us special isn’t just the time we spend together—it’s how every moment turns into a memory ✨ From endless bike rides 🏍️ with no destination to late-night adventures 🌙 fueled by laughter 😄, we move through life side by side.

Our jokes never run out 😂, our smiles come naturally 😊, and even silence feels comfortable 🤍 when we’re together. We chase new roads 🛣️, discover new places 🌍, sing loudly to random songs 🎶, and dance without caring who’s watching 💃🕺.
            </p>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    Through coffee stops ☕, street food 🍔, music vibes 🎧, and spontaneous plans ⚡, we’ve built a bond full of joy and freedom 🌈 No matter where life takes us, our friendship keeps roaring forward 🔥—happy, fearless, and always together 🤝💫
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
  //         <div key={photo.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
  //           <img 
  //             src={photo.url} 
  //             alt={photo.caption}
  //             className="w-full h-80 object-cover"
  //           />
  //             <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">

  //   {/* Download Button */}
  //   <button
  //   onClick={() => downloadImage(photo.url, `photo-${photo.id}.jpg`)}
  //   className="self-end bg-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-pink-500 hover:text-white transition"
  // >
  //   ⬇ Download
  // </button>
            
  //           <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
  //             <div className="p-6 text-white">
  //               <h3 className="text-xl font-semibold">{photo.caption}</h3>
  //               <p className="text-sm text-gray-300">{photo.date}</p>
  //             </div>
  //           </div>
  //         </div>
  <div key={photo.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
  <img
    src={photo.url}
    alt={photo.caption}
    className="w-full h-80 object-cover"
  />

  {/* SINGLE OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity
                  flex flex-col justify-between p-4">

    {/* Download */}
    <button
      onClick={() => downloadImage(photo.url, `photo-${photo.id}.jpg`)}
      className="self-end bg-white/90 px-3 py-2 rounded-lg text-sm font-semibold
                 hover:bg-pink-500 hover:text-white transition"
    >
      ⬇ Download
    </button>

    {/* Caption */}
    <div className="text-white">
      <h3 className="text-xl font-semibold">{photo.caption}</h3>
      <p className="text-sm text-gray-300">{photo.date}</p>
    </div>
  </div>
{/* </div> */}

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
          <div key={video.id}  onClick={() => setSelectedVideo(video)} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer">
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
      {/* VIDEO PLAYER MODAL */}
{selectedVideo && (
  <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
    
    <div className="bg-white rounded-2xl p-4 max-w-3xl w-full relative">
      
      {/* Close button */}
     <button
  onClick={() => setSelectedVideo(null)}
  className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-red-500"
>
  ✕
</button>


      {/* VIDEO READER */}
      <video
        src={selectedVideo.src}
        controls
        autoPlay
        className="w-full rounded-xl"
      />

      <h3 className="mt-4 text-xl font-bold text-gray-800">
        {selectedVideo.title}
      </h3>
    </div>

  </div>
)}


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


