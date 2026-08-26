'use client';

import { useEffect, useState } from 'react';
import { skills } from '../data';

const birthDate = { year: 1994, month: 7, day: 2 };

function getAgeInDays() {
  const today = new Date();
  const todayUtc = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const birthDateUtc = Date.UTC(birthDate.year, birthDate.month, birthDate.day);

  return Math.floor((todayUtc - birthDateUtc) / 86_400_000);
}

function numberToWords(value: number): string {
  const ones = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (value < 20) return ones[value];
  if (value < 100) return `${tens[Math.floor(value / 10)]}${value % 10 ? `-${ones[value % 10]}` : ''}`;
  if (value < 1_000) {
    return `${ones[Math.floor(value / 100)]} hundred${value % 100 ? ` ${numberToWords(value % 100)}` : ''}`;
  }
  if (value < 1_000_000) {
    return `${numberToWords(Math.floor(value / 1_000))} thousand${value % 1_000 ? ` ${numberToWords(value % 1_000)}` : ''}`;
  }

  return value.toLocaleString('en-US');
}

export function AboutSection() {
  const [ageInDays, setAgeInDays] = useState(getAgeInDays);

  useEffect(() => {
    setAgeInDays(getAgeInDays());
  }, []);

  return (
    <section className="about" id="about">
      <div className="section-heading">
        <h2>About me</h2>
        <p>A little about me and the things I work with.</p>
      </div>
      <div className="about-grid">
        <p>
          Born {numberToWords(ageInDays)} days ago, I’ve spent a good part of that time
          learning by following my curiosity. I started to learn coding in high school, setting up
          forums and fixing websites for gaming communities in exchange for staff roles. Those
          early projects helped me find remote work and support myself, and I’ve kept learning by
          following whatever problem was in front of me—from WordPress and hosting
          to frontend development, automation, and security research. Most of what I know came from
          trying things, breaking things, reading the docs, and figuring out how to make them work
          again.
        </p>
        <p className="recognition">
          Right now, I spend most of my time working on bug bounties through HackerOne, Bugcrowd,
          and privately hosted programs. Along the way, I reported broken access control involving
          PII exposure to the{' '}
          <a className="inline-link" href="https://lacity.gov/" target="_blank" rel="noreferrer">
            City of Los Angeles
          </a>{' '}
          and reflected XSS to{' '}
          <a className="inline-link" href="https://iongroup.com/" target="_blank" rel="noreferrer">
            ION Group
          </a>
          . They both thanked me for sending the reports, but I can’t share the technical details
          because they were handled through responsible disclosure.
        </p>
        <div className="skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
