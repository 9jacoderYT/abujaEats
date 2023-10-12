"use client";

export default function Category() {
  return (
    <>
      <div className="carousel rounded-box">
        <div className="carousel-item block m-2">
          <img
            src="https://www.withinnigeria.com/piece/wp-content/uploads/sites/9/word-image-2642-2.png"
            alt="Streetfood"
            className="rounded-lg h-[200px] lg:h-[300px]"
          />
          <div className="text-xl font-bold mt-2">#Street Food</div>
        </div>
        <div className="carousel-item block m-2">
          <img
            src="https://nairametrics.com/wp-content/uploads/2022/07/Kapadoccia-.jpg"
            alt="Resturants"
            className="rounded-lg h-[200px] lg:h-[300px]"
          />
          <div className="text-xl font-bold mt-2">#Resturants</div>
        </div>
        <div className="carousel-item block m-2">
          <img
            src="https://www.realsimple.com/thmb/6r6EVnkDyDSiFjKOE5EXLmb-f3g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/types-of-grills-2000-708ebb6994e64c09a6b87ca2556c2c66.jpg"
            alt="Grill"
            className="rounded-lg h-[200px] lg:h-[300px]"
          />
          <div className="text-xl font-bold mt-2">#Grill</div>
        </div>
        <div className="carousel-item block m-2">
          <img
            src="https://attenvo.com/blog/wp-content/uploads/2022/09/The-Pasha-Abuja-edited.jpg"
            alt="Grill"
            className="rounded-lg h-[200px] lg:h-[300px]"
          />
          <div className="text-xl font-bold mt-2">#Outdoor</div>
        </div>
      </div>
    </>
  );
}
