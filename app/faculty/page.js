import Image from "next/image";

const faculty = [
  { name: "Dr. A. Sharma", subject: "Mathematics", img: "/fac.png" },
  { name: "Prof. R. Mehta", subject: "Physics", img: "/image1.png" },
  { name: "Ms. P. Kulkarni", subject: "Chemistry", img: "/image2.png" },
];

export default function FacultyPage() {
  return (
    <div className="w-full min-h-screen px-6 md:px-20 py-24 bg-gray-50">

      <h1 className="text-4xl font-bold text-center">
        Our <span className="text-orange-500">Faculty</span>
      </h1>

      <p className="mt-4 text-center text-gray-600">
        Learn from experienced and dedicated educators.
      </p>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {faculty.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition"
          >
            <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
              <Image src={f.img} alt={f.name} width={112} height={112} />
            </div>

            <h3 className="text-lg font-semibold">{f.name}</h3>
            <p className="text-gray-600">{f.subject}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
