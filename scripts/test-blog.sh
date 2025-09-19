#!/bin/bash

echo "🧪 Testing Blog Structure..."
echo

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Test blog files exist
echo "📁 Testing Blog Files..."
blogFiles=(
  "src/app/blog/page.tsx"
  "src/app/blog/[slug]/page.tsx"
  "src/lib/blog.ts"
  "src/components/Navigation.tsx"
  "src/app/globals.css"
)

allTestsPassed=true

for file in "${blogFiles[@]}"; do
  if [ -f "$file" ]; then
    echo -e "${GREEN}✅ $file - exists${NC}"
  else
    echo -e "${RED}❌ $file - missing${NC}"
    allTestsPassed=false
  fi
done

# Test blog structure
echo
echo "📁 Testing Blog Structure..."

# Check if blog directory exists
if [ -d "src/app/blog" ]; then
  echo -e "${GREEN}✅ Blog directory exists${NC}"
  
  # Check if dynamic route directory exists
  if [ -d "src/app/blog/[slug]" ]; then
    echo -e "${GREEN}✅ Dynamic route directory exists${NC}"
  else
    echo -e "${RED}❌ Dynamic route directory missing${NC}"
    allTestsPassed=false
  fi
else
  echo -e "${RED}❌ Blog directory missing${NC}"
  allTestsPassed=false
fi

# Test blog content
echo
echo "📝 Testing Blog Content..."

if [ -f "src/lib/blog.ts" ]; then
  # Check for required exports
  if grep -q "export interface BlogPost" "src/lib/blog.ts"; then
    echo -e "${GREEN}✅ BlogPost interface defined${NC}"
  else
    echo -e "${RED}❌ BlogPost interface missing${NC}"
    allTestsPassed=false
  fi
  
  if grep -q "export function getBlogPosts" "src/lib/blog.ts"; then
    echo -e "${GREEN}✅ getBlogPosts function exported${NC}"
  else
    echo -e "${RED}❌ getBlogPosts function missing${NC}"
    allTestsPassed=false
  fi
  
  if grep -q "export function getBlogPost" "src/lib/blog.ts"; then
    echo -e "${GREEN}✅ getBlogPost function exported${NC}"
  else
    echo -e "${RED}❌ getBlogPost function missing${NC}"
    allTestsPassed=false
  fi
  
  # Check for sample blog posts
  if grep -q "welcome-to-my-blog" "src/lib/blog.ts"; then
    echo -e "${GREEN}✅ Sample blog posts included${NC}"
  else
    echo -e "${RED}❌ Sample blog posts missing${NC}"
    allTestsPassed=false
  fi
fi

# Test navigation integration
echo
echo "🧭 Testing Navigation Integration..."

if [ -f "src/components/Navigation.tsx" ]; then
  if grep -q "name: 'Blog'" "src/components/Navigation.tsx"; then
    echo -e "${GREEN}✅ Blog link added to navigation${NC}"
  else
    echo -e "${RED}❌ Blog link missing from navigation${NC}"
    allTestsPassed=false
  fi
  
  if grep -q "href: '/blog'" "src/components/Navigation.tsx"; then
    echo -e "${GREEN}✅ Blog route configured correctly${NC}"
  else
    echo -e "${RED}❌ Blog route not configured${NC}"
    allTestsPassed=false
  fi
fi

# Test CSS styles
echo
echo "🎨 Testing CSS Styles..."

if [ -f "src/app/globals.css" ]; then
  if grep -q ".line-clamp-3" "src/app/globals.css"; then
    echo -e "${GREEN}✅ Blog-specific CSS classes added${NC}"
  else
    echo -e "${RED}❌ Blog-specific CSS missing${NC}"
    allTestsPassed=false
  fi
  
  if grep -q ".prose" "src/app/globals.css"; then
    echo -e "${GREEN}✅ Prose styling added${NC}"
  else
    echo -e "${RED}❌ Prose styling missing${NC}"
    allTestsPassed=false
  fi
fi

# Summary
echo
echo "📊 Test Summary:"
if [ "$allTestsPassed" = true ]; then
  echo -e "${GREEN}🎉 All blog tests passed!${NC}"
  echo
  echo -e "${BLUE}💡 Next steps:${NC}"
  echo "1. Run: npm run dev"
  echo "2. Visit: http://localhost:3000/blog"
  echo "3. Test blog functionality"
  echo "4. Run: ./scripts/dev-workflow.sh commit"
  echo "5. Push to staging for testing"
else
  echo -e "${RED}❌ Some tests failed. Please fix the issues above.${NC}"
  exit 1
fi
