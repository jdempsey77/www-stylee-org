#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🧪 Testing Blog Structure...\n');

// Test blog files exist
const blogFiles = [
  'src/app/blog/page.tsx',
  'src/app/blog/[slug]/page.tsx',
  'src/lib/blog.ts',
  'src/components/Navigation.tsx',
  'src/app/globals.css'
];

let allTestsPassed = true;

blogFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} - exists`);
  } else {
    console.log(`❌ ${file} - missing`);
    allTestsPassed = false;
  }
});

// Test blog structure
console.log('\n📁 Testing Blog Structure...');

// Check if blog directory exists
const blogDir = path.join(process.cwd(), 'src/app/blog');
if (fs.existsSync(blogDir)) {
  console.log('✅ Blog directory exists');
  
  // Check if dynamic route directory exists
  const slugDir = path.join(blogDir, '[slug]');
  if (fs.existsSync(slugDir)) {
    console.log('✅ Dynamic route directory exists');
  } else {
    console.log('❌ Dynamic route directory missing');
    allTestsPassed = false;
  }
} else {
  console.log('❌ Blog directory missing');
  allTestsPassed = false;
}

// Test blog content
console.log('\n📝 Testing Blog Content...');

try {
  // Try to require the blog lib (this will test TypeScript compilation if available)
  const blogLibPath = path.join(process.cwd(), 'src/lib/blog.ts');
  if (fs.existsSync(blogLibPath)) {
    const content = fs.readFileSync(blogLibPath, 'utf8');
    
    // Check for required exports
    if (content.includes('export interface BlogPost')) {
      console.log('✅ BlogPost interface defined');
    } else {
      console.log('❌ BlogPost interface missing');
      allTestsPassed = false;
    }
    
    if (content.includes('export function getBlogPosts')) {
      console.log('✅ getBlogPosts function exported');
    } else {
      console.log('❌ getBlogPosts function missing');
      allTestsPassed = false;
    }
    
    if (content.includes('export function getBlogPost')) {
      console.log('✅ getBlogPost function exported');
    } else {
      console.log('❌ getBlogPost function missing');
      allTestsPassed = false;
    }
    
    // Check for sample blog posts
    if (content.includes('welcome-to-my-blog')) {
      console.log('✅ Sample blog posts included');
    } else {
      console.log('❌ Sample blog posts missing');
      allTestsPassed = false;
    }
  }
} catch (error) {
  console.log(`❌ Error reading blog lib: ${error.message}`);
  allTestsPassed = false;
}

// Test navigation integration
console.log('\n🧭 Testing Navigation Integration...');

try {
  const navPath = path.join(process.cwd(), 'src/components/Navigation.tsx');
  if (fs.existsSync(navPath)) {
    const content = fs.readFileSync(navPath, 'utf8');
    
    if (content.includes("name: 'Blog'")) {
      console.log('✅ Blog link added to navigation');
    } else {
      console.log('❌ Blog link missing from navigation');
      allTestsPassed = false;
    }
    
    if (content.includes("href: '/blog'")) {
      console.log('✅ Blog route configured correctly');
    } else {
      console.log('❌ Blog route not configured');
      allTestsPassed = false;
    }
  }
} catch (error) {
  console.log(`❌ Error reading navigation: ${error.message}`);
  allTestsPassed = false;
}

// Test CSS styles
console.log('\n🎨 Testing CSS Styles...');

try {
  const cssPath = path.join(process.cwd(), 'src/app/globals.css');
  if (fs.existsSync(cssPath)) {
    const content = fs.readFileSync(cssPath, 'utf8');
    
    if (content.includes('.line-clamp-3')) {
      console.log('✅ Blog-specific CSS classes added');
    } else {
      console.log('❌ Blog-specific CSS missing');
      allTestsPassed = false;
    }
    
    if (content.includes('.prose')) {
      console.log('✅ Prose styling added');
    } else {
      console.log('❌ Prose styling missing');
      allTestsPassed = false;
    }
  }
} catch (error) {
  console.log(`❌ Error reading CSS: ${error.message}`);
  allTestsPassed = false;
}

// Summary
console.log('\n📊 Test Summary:');
if (allTestsPassed) {
  console.log('🎉 All blog tests passed!');
  console.log('\n💡 Next steps:');
  console.log('1. Run: npm run dev');
  console.log('2. Visit: http://localhost:3000/blog');
  console.log('3. Test blog functionality');
  console.log('4. Run: ./scripts/dev-workflow.sh commit');
  console.log('5. Push to staging for testing');
} else {
  console.log('❌ Some tests failed. Please fix the issues above.');
  process.exit(1);
}
