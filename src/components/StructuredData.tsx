export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jerry Dempsey",
    "jobTitle": "Product and Application Security Leader",
    "description": "Product and Application Security Leader with 20+ years of experience in cybersecurity. Expert in team building, mentoring, and implementing cutting-edge security strategies.",
    "url": "https://stylee.org",
    "image": "https://stylee.org/mainlogo.png",
    "email": "jerry@stylee.org",
    "sameAs": [
      "https://www.linkedin.com/in/jerryldempsey/",
      "https://github.com/jdempsey77"
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "FanDuel",
        "jobTitle": "Sr. Director, Head of Software Security"
      }
    ],
    "alumniOf": [
      {
        "@type": "Organization",
        "name": "Warner Bros. Discovery",
        "jobTitle": "Director, Product and Application Security"
      }
    ],
    "knowsAbout": [
      "Product Security",
      "Application Security",
      "Cybersecurity",
      "Team Leadership",
      "Software Security",
      "DevSecOps",
      "Security Architecture",
      "Vulnerability Management"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Product and Application Security Leader",
      "description": "Leading security initiatives and building high-performing security teams"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
