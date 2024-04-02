import React from "react";

export const dynamic = "force-dynamic";
const BioPage = async () => {
  const res = await fetch(
    "https://baconipsum.com/api/?type=meat-and-filler&para=5",
  );
  const bioData = await res.json();
  return (
    <div className={"bio"}>
      <article>
        <div className={"mb-4"}>
          <h1 className={"fw-bolder mb-1"}>Hokusai Bio</h1>
        </div>
        <section className={"mb-5"}>
          {bioData.map((para, i) => (
            <p key={i} className={"fs-5 mb-4"}>
              {para}
            </p>
          ))}
        </section>
      </article>
    </div>
  );
};

export default BioPage;
