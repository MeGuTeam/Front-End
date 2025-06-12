import React from 'react';
import { FaEnvelope, FaPhone, FaHome, FaPuzzlePiece, FaQuestionCircle, FaUsers } from 'react-icons/fa';
import { FaPeopleGroup } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { NavigationLink, ContactInfo, LegalLink } from '../types';

export const navigationLinks: NavigationLink[] = [
  { name: 'Beranda', href: '#', icon: React.createElement(FaHome) },
  { name: 'Fitur', href: '#', icon: React.createElement(FaPuzzlePiece) },
  { name: 'FAQ', href: '#', icon: React.createElement(FaQuestionCircle) },
  { name: 'Tim Pengembang', href: '#', icon: React.createElement(FaUsers) }
];

export const aboutLinks: NavigationLink[] = [
  { name: 'Siapa Kami', href: '#', icon: React.createElement(FaPeopleGroup) },
  { name: 'Misi Pembelajaran', href: '#', icon: React.createElement(TbTargetArrow) }
];

export const contactInfo: ContactInfo[] = [
  { 
    type: 'email', 
    value: 'support@ikibannihongo.com', 
    icon: React.createElement(FaEnvelope) 
  },
  { 
    type: 'phone', 
    value: '+62 123 456 7890', 
    icon: React.createElement(FaPhone) 
  }
];

export const legalLinks: LegalLink[] = [
  { name: 'Kebijakan Privasi', href: '#' },
  { name: 'Syarat & Ketentuan', href: '#' }
];

export const brandInfo = {
  name: 'IkibanNihongo',
  description: 'Platform pembelajaran bahasa Jepang yang interaktif dan mudah dipahami. Mulai perjalanan belajar bahasa Jepang Anda bersama kami.',
  tagline: 'Made with ❤️ for Japanese learners',
  encouragement: 'がんばって！',
  flag: '🇯🇵'
};