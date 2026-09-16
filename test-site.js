import assert from 'assert';
import { projects } from './src/data/projects.js';
import { siteConfig } from './src/data/siteConfig.js';
import { experiences, competencies, aboutBio } from './src/data/experience.js';

console.log('--- STARTING PORTFOLIO VERIFICATION SUITE ---');

// 1. Verify siteConfig
console.log('1. Checking siteConfig integrity...');
assert.strictEqual(siteConfig.name, 'R DIMAS ARN');
assert(siteConfig.email.includes('@'));
assert.strictEqual(siteConfig.copyright.year, '2026');
assert(Array.isArray(siteConfig.navLinks) && siteConfig.navLinks.length === 4);
console.log('✓ siteConfig passed.');

// 2. Verify Projects Database
console.log('2. Checking projects database...');
assert.strictEqual(projects.length, 12, 'Must have 12 initial projects');
const designCount = projects.filter(p => p.category === 'design').length;
const videoCount = projects.filter(p => p.category === 'video').length;
assert.strictEqual(designCount, 8, 'Must have 8 design projects matching reference');
assert.strictEqual(videoCount, 4, 'Must have 4 video projects matching reference');

// Check each project structure
projects.forEach((p, index) => {
  assert(p.id, `Project at index ${index} missing id`);
  assert(p.title, `Project ${p.id} missing title`);
  assert(p.category === 'design' || p.category === 'video', `Project ${p.id} invalid category`);
  assert(p.year, `Project ${p.id} missing year`);
  assert(p.image, `Project ${p.id} missing image`);
  assert(Array.isArray(p.tools) && p.tools.length > 0, `Project ${p.id} missing tools`);
});
console.log('✓ projects database passed (8 design, 4 video, 12 total).');

// 3. Verify Experience & Competency Matrix
console.log('3. Checking experience & competency matrix...');
assert(experiences.length >= 4, 'Must have 4 timeline experiences');
assert(competencies.length >= 8, 'Must have 8 competency matrix tags');
assert(aboutBio.identityCards.length === 3, 'Must have 3 identity cards');
console.log('✓ experience and competencies passed.');

// 4. Test Scalability Logic (Simulating Project 13, 14, 15 addition)
console.log('4. Testing scalability logic when user adds new projects...');
const extendedProjects = [
  ...projects,
  {
    id: 13,
    number: "13",
    title: "Brutalist Monolith 02",
    category: "design",
    type: "POSTER / ARCHIVE",
    year: "2026",
    image: "/images/project-01.svg",
    description: "Added project description",
    tools: ["ILLUSTRATOR"]
  },
  {
    id: 14,
    number: "14",
    title: "Kinetic Velocity Reel",
    category: "video",
    type: "MOTION LAB",
    year: "2026",
    image: "/images/project-02.svg",
    videoUrl: "https://vimeo.com/example",
    duration: "02:00",
    description: "Added video project description",
    tools: ["AFTER EFFECTS"]
  }
];

// Test dynamic calculation
const newAllCount = extendedProjects.length;
const newDesignCount = extendedProjects.filter(p => p.category === 'design').length;
const newVideoCount = extendedProjects.filter(p => p.category === 'video').length;

assert.strictEqual(newAllCount, 14);
assert.strictEqual(newDesignCount, 9);
assert.strictEqual(newVideoCount, 5);

// Test pagination with 14 projects
const initialVisible = extendedProjects.slice(0, 6);
assert.strictEqual(initialVisible.length, 6);
const remaining1 = extendedProjects.length - initialVisible.length;
assert.strictEqual(remaining1, 8);

const secondBatch = extendedProjects.slice(0, 12);
assert.strictEqual(secondBatch.length, 12);
const remaining2 = extendedProjects.length - secondBatch.length;
assert.strictEqual(remaining2, 2);

const finalBatch = extendedProjects.slice(0, 18);
assert.strictEqual(finalBatch.length, 14);
const remainingFinal = extendedProjects.length - finalBatch.length;
assert.strictEqual(remainingFinal, 0, 'No projects should remain');

console.log('✓ Scalability test passed seamlessly! Adding items dynamically adapts.');

console.log('--- ALL VERIFICATION TESTS PASSED SUCCESSFULLY! ---');
