import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full px-6 py-2 text-center bg-gradient-to-r from-purple-400 to-black-200">
      Cobbled together from too many tutorials and an alarming lack of know-how. This website, a digital monolith, stands as proof that the gods of coding are either powerless to improve their creation or blissfully ignorant of the chaos unfolding within their domain. More than just bytes and code, it's a testament to humanity's audacity to challenge the natural order of the internet. It is hubris manifest.{" "}
      <Link
        href=""
        target="_blank"
        className="text-blue-500 hover:text-blue-600"
      >
        
      </Link>
      
    </div>
  );
}
