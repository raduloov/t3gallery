import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/83SbnXkuEV7wjR7PjURcWcyqdo14ZA5fhXEnzMjUI0YKGOep",
  "https://utfs.io/f/83SbnXkuEV7wCZYLsjoJAz8TOKpy04mWVjuQfPSM32ZJvFgH",
  "https://utfs.io/f/83SbnXkuEV7wQJpB3pYUd60PH5mcrbFDJyoBMLWGnYaf3Tgi",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
