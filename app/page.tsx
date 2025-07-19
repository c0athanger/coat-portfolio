
"use client"
import React, { useState, useEffect } from 'react';
import * as motion from "motion/react-client"
import Loader from "@/app/components/loader";
import { usePathname } from 'next/navigation';
import Nav from "@/app/components/nav";
import About from "@/app/components/about";
import CardList from "./components/cardlist";
import Footer from "./components/footer";
import { MouseGlow } from "./components/mouseglow";
import Footnote from "./components/footnote";
import Namecard from "./components/namecard";


const experience = [
  {
    date: '2023 — Present',
    title: 'Software Developer - AI Trainer · DataAnnotation (Freelance)',
    description: 'Performed prompt engineering and quality assurance on AI model outputs. Annotated and corrected code across multiple languages. Reviewed AI responses involving diverse APIs.',
    link: '',
    languages: ['Python', 'JavaScript', 'C#', 'C++', 'Java', 'Kotlin', 'Bash']
  },
  {
    date: 'SEP — DEC 2023',
    title: 'Software Developer Co-op · JSI Telecom',
    description: 'Developed web applications using JavaScript, C#, Java, Docker, Kubernetes, SQLite, and Kafka. Contributed to Angular/Ruby full-stack projects, bug fixing, and build rollouts in an agile team. Created grunt tasks for cache control.',
    link: '',
    languages: ['JavaScript', 'C#', 'Java', 'Docker', 'Kubernetes', 'SQLite', 'Kafka', 'Angular', 'Ruby']
  },
  {
    date: '2019 — 2021',
    title: 'Analyst · MHPD Health Canada',
    description: 'Automated office tasks with VBA in a regulated, data-rich environment. Gained familiarity with databases like DSTS and Canada Vigilance Adverse Reaction. Authored periodic benefit-risk evaluation reports (PBRERs).',
    link: '',
    languages: ['VBA', 'SQL']
  },
  {
    date: '2018 — 2019',
    title: 'Oil Properties Analyst · ESTS Environment Canada',
    description: 'Built regression models in MATLAB to predict SARA components from FT-IR oil spectra. Used instrumentation such as GC-MS and FT-IR. Performed statistical analyses using MATLAB and VBA.',
    link: '',
    languages: ['MATLAB', 'VBA']
  }
];

const projects = [
  {
    date: '2025',
    title: 'Portfolio Website',
    description: 'Developed a personal portfolio using Next.js and React. Styled with Tailwind CSS.',
    link: 'https://github.com/c0athanger/coat-portfolio',
    languages: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    date: '2024',
    title: 'Ocean Change App',
    description: 'Mobile app for fishermen to report observations to the Oregon Department of Fish and Wildlife. Built with Flutter and integrated with Firebase, Firestore, and Hive.',
    link: 'https://github.com/LeifRasmuson/OAH_OceanChange',
    languages: ['Dart', 'Flutter', 'Firebase', 'Firestore', 'Hive']
  },
  {
    date: '2022',
    title: 'Implementation of Pluribus AI Poker Bot',
    description: 'Built a poker-playing AI using Counterfactual Regret Minimization. Designed a thread-safe MCCFR model and implemented a poker engine using object-oriented programming.',
    link: 'https://github.com/cigar-bit/pluribus-poker',
    languages: ['C++', 'C']
  },
  {
    date: '2021',
    title: 'C++ Implementation of Freddie_segment',
    description: 'Freddie is an annotation-free isoform detection and discovery tool that uses as input transcriptomic long-reads (e.g. Oxford Nanopore reads) aligned to the reference genome using a splice aligner.',
    link: 'https://github.com/cigar-bit/freddieC',
    languages: ['C++', 'C']
  },
  {
    date: '2019 — 2020',
    title: "Honor's Project (Bioinformatics)",
    description: 'Analyzed p-value bias in DESeq2 using permutation testing. Conducted differential gene expression studies on Compute Canada cloud servers. Designed permutation testing methods in R.',
    link: '',
    languages: ['R', 'bash', 'Python']
  }
];




export default function Home() {
  const isHome = usePathname() === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);


  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

    handleExternalLinks();
  }, [isLoading]);
  return (
    <motion.div className="flex scroll-smooth flex-col fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-navy overflow-y-auto z-[99] cursor-default">
      <MouseGlow />
      {isLoading && isHome ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
        <motion.div className="">
          <Nav isHome={isHome} />
          <motion.div id="content" className=" flex flex-row justify-center w-full max-w-full">
            <motion.div className="sticky top-0 w-full max-w-40 sm:max-w-2xl h-full pl-2 pr-4 sm:pl-10 sm:pr-30">
              <Namecard delay={0.6} />
            </motion.div>
            <motion.div className="flex flex-col space-y-4 w-full max-w-60 sm:max-w-2xl sm:pr-10 pr-2">

              <About id='About' delay={0.6} />
              <CardList id="Experience" delay={1.2} data={experience} />
              <CardList id="Projects" delay={1.2} data={projects} />
              <Footnote />
            </motion.div>
          </motion.div>

          <Footer />

        </motion.div>
      )}
    </motion.div>
  );
}
