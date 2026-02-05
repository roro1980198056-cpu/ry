import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Top Security Bar */}
      <div className="bg-white py-2 px-4 flex items-center justify-start border-b">
        <div className="flex items-center gap-2">
          <Image
            src="https://ext.same-assets.com/778971269/3830594768.svg"
            alt="Secure Order"
            width={24}
            height={24}
          />
          <span className="text-sm font-medium text-gray-600">Secure Order</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-8 px-4 md:px-8 max-w-4xl mx-auto">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-center leading-relaxed mb-8">
          BREAKING NEWS!: How You Can{" "}
          <span className="text-[#E8847C]">Say Goodbye to Your Skin Problems</span>: The{" "}
          <strong>FDA Cleared</strong>, <strong>100% Natural</strong>, 10-Minute{" "}
          <span className="underline text-[#E8847C]">Revolutionary Skincare</span> Routine Everyone&apos;s Talking About!
        </h1>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/2 text-sm md:text-base leading-relaxed">
            <p className="mb-4">
              You&apos;ve probably seen tons of face masks claiming to give you glowing skin and amazing results. But let&apos;s be real – most of them are either uncomfortable, complicated to use, or just don&apos;t deliver.
            </p>
            <p className="mb-4">
              Our Red Light Face Mask is different. Imagine a mask that&apos;s soft and comfy, made from high-quality silicone, and made in a FDA-cleared factory.
            </p>
            <p className="mb-4">
              From Kim Kardashian to Victoria Beckham and Julia Roberts, Hollywood&apos;s most radiant faces are all pampering their skin with LED light therapy. This anti-aging essential has become the <strong>go-to choice of celebs, promising effortless rejuvenation and youthful-looking skin.</strong>
            </p>
            <p className="mb-4">
              No more heavy, awkward masks that feel like a workout to wear. Our mask is lightweight with an adjustable head strap – you might even forget you&apos;re wearing it!
            </p>
          </div>

          <div className="md:w-1/2">
            <Image
              src="https://ext.same-assets.com/778971269/1155449003.png"
              alt="8 Advantageous Features"
              width={500}
              height={400}
              className="w-full rounded-lg"
            />
          </div>
        </div>

        <div className="mt-8 text-sm md:text-base leading-relaxed">
          <p className="mb-4">
            And guess what? It&apos;s rechargeable and portable. You can use it while watching TV, cooking, or even working on your laptop. Plus, it&apos;s designed to be easy to use – no confusing manuals or complicated steps. <strong>Just put it on and let it work its magic.</strong>
          </p>
          <p className="mb-4">
            But here&apos;s the real kicker – it actually works. We&apos;re talking real, visible results. Your skin will glow, look healthier, and feel rejuvenated. No more empty promises. With our Light Therapy Facial-X7 Mask, you get a skincare product that delivers.
          </p>
        </div>
      </section>

      {/* Comfort Meets Convenience */}
      <section className="section-light py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-center mb-6">Comfort Meets Convenience</h2>
          <p className="text-center text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Say goodbye to uncomfortable, bulky masks. Our Light Therapy Facial-X7 Mask is made with high-quality silicone that feels soft and comfy on your skin. It&apos;s lightweight and comes with an adjustable head strap for a perfect fit. Plus, it&apos;s rechargeable and portable, so you can use it while watching TV, cooking, or even working on your laptop.
          </p>
        </div>
      </section>

      {/* 7 Different Light Options */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl text-center text-[#E8847C] mb-8">
            7 Different Light Options, Each Targeting Specific Skin Concerns:
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/2">
              <Image
                src="https://ext.same-assets.com/778971269/2537731806.png"
                alt="7 Proven Wavelengths"
                width={400}
                height={500}
                className="w-full"
              />
            </div>

            <div className="md:w-1/2">
              <p className="mb-4 text-sm">
                Unlike other face masks that offer only ONE type of light therapy, our Red Light Face Mask comes with 7 different light options, each targeting specific skin concerns:
              </p>
              <ul className="check-list text-sm space-y-3">
                <li><strong className="text-red-600">Red light</strong> = Boosts collagen production for firmer, younger-looking skin.</li>
                <li><strong className="text-blue-600">Blue light</strong> = Fights acne and soothes irritation.</li>
                <li><strong className="text-green-600">Green light:</strong> = Balances skin tone and reduces redness.</li>
                <li><strong className="text-yellow-600">Yellow light</strong> = Energizes your skin cells.</li>
                <li><strong className="text-purple-600">Purple light</strong> = Combines red and blue light benefits for the ultimate skin rejuvenation.</li>
                <li><strong className="text-cyan-600">Cyan light</strong> = Enhances cell energy.</li>
                <li><strong className="text-pink-600">Laser light</strong> = Penetrates deep to improve overall skin health.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 - Gentle and Safe */}
          <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Image
                src="https://ext.same-assets.com/778971269/3280741046.png"
                alt="Gentle and Safe"
                width={60}
                height={60}
              />
            </div>
            <h3 className="text-lg font-semibold mb-3">Gentle and Safe for All</h3>
            <p className="text-sm text-gray-600">
              Our mask is non-invasive, meaning it&apos;s gentle on your skin with no high heat or harmful UV rays. It&apos;s suitable for most skin types and can be used regularly without worry.
            </p>
          </div>

          {/* Card 2 - See Real Results */}
          <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Image
                src="https://ext.same-assets.com/778971269/1341688941.png"
                alt="See Real Results"
                width={60}
                height={60}
              />
            </div>
            <h3 className="text-lg font-semibold mb-3">See Real Results</h3>
            <p className="text-sm text-gray-600">
              Experience real, visible results. Your skin will glow, look healthier, and feel rejuvenated. This isn&apos;t just another skincare product that promises the world and gives you nothing. The Light Therapy Facial-X7 Mask delivers.
            </p>
          </div>

          {/* Card 3 - FDA-Cleared */}
          <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Image
                src="https://ext.same-assets.com/778971269/235034014.jpeg"
                alt="FDA Cleared"
                width={60}
                height={60}
              />
            </div>
            <h3 className="text-lg font-semibold mb-3">FDA-Cleared Factory</h3>
            <p className="text-sm text-gray-600">
              The Light Therapy Facial-X7 Mask is produced in a factory that&apos;s FDA-cleared, meeting all stringent guidelines for safety and quality. This means you can trust that our mask is made with the highest standards in mind.
            </p>
          </div>

          {/* Card 4 - Self-Care */}
          <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Image
                src="https://ext.same-assets.com/778971269/1878121369.jpeg"
                alt="Self Care"
                width={60}
                height={60}
              />
            </div>
            <h3 className="text-lg font-semibold mb-3">Elevate Your Self-Care Routine</h3>
            <p className="text-sm text-gray-600">
              Take your self-care routine to the next level. This mask isn&apos;t just about skincare – it&apos;s about giving yourself the holistic therapy you deserve. Embrace the glow, boost your mood, and enjoy the convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-center mb-8">What Does the Science Say About Red Light Therapy?</h2>

          <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-8">
            <p className="text-sm mb-6">
              Red light therapy (RLT) has garnered significant attention in the skincare world, backed by extensive scientific research. This non-invasive treatment works by penetrating the skin layers, stimulating cellular functions to improve overall skin health.
            </p>

            <h3 className="text-xl text-center mb-4">Collagen Production and Skin Rejuvenation</h3>

            <p className="text-sm mb-4">
              RLT is thought to work by acting on the mitochondria, the &quot;power plants&quot; in your cells, increasing energy production which aids in skin repair and rejuvenation.
            </p>
            <p className="text-sm">
              Studies show that red light therapy stimulates collagen production, enhancing the skin&apos;s structure, strength, and elasticity. It also boosts fibroblast production, which contributes to collagen formation, and increases blood circulation to the tissues, promoting a healthy, youthful glow.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-lg font-semibold mb-4">Treating Skin Conditions</h3>
              <p className="text-sm mb-4">Red light therapy has shown promise in treating various skin conditions:</p>
              <ul className="check-list text-sm">
                <li><strong>Wrinkles and Fine Lines:</strong> RLT helps reduce the appearance of wrinkles and fine lines by boosting collagen and elastin production.</li>
                <li><strong>Acne and Scarring:</strong> Blue and red light combinations can help reduce acne by targeting acne-causing bacteria and reducing inflammation.</li>
                <li><strong>Sun Damage and Pigmentation:</strong> Regular treatments can improve the appearance of sun-damaged skin and even out skin tone.</li>
              </ul>
            </div>

            <div className="md:w-1/2">
              <div className="border rounded-xl p-4 bg-white">
                <h4 className="text-center font-semibold mb-4">Visible Results in Just 6 Weeks</h4>
                <Image
                  src="https://ext.same-assets.com/778971269/1639747342.jpeg"
                  alt="Before and After"
                  width={400}
                  height={300}
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>

          <p className="text-sm mt-6 text-gray-600">
            According to studies published by the American Academy of Dermatology, light therapy promotes tissue repair and regeneration by naturally stimulating collagen production, proving its effectiveness in anti-aging and skin rejuvenation treatments.
          </p>
          <p className="text-sm mt-4 text-gray-600">
            With over 4000 basic science research and clinical studies supporting its benefits, red light therapy is now recognized as a first-line treatment option for conditions like acute neck or back pain, tendinitis, and even skin conditions like eczema and psoriasis.
          </p>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl text-center mb-8">
            The Proof is in the Glow: Why Skincare Enthusiasts Are Loving The Light Therapy Facial-X7 Mask
          </h2>

          <div className="relative">
            <div className="bg-[#7DD3D5] rounded-lg p-6 text-white max-w-lg">
              <p className="text-sm italic mb-4">
                &quot;I was skeptical at first, but after just a few weeks of using the mask, my skin is clearer, firmer, and more radiant. It&apos;s like a spa treatment at home!&quot;
              </p>
              <p className="font-semibold italic">- Emily T.</p>
            </div>

            <div className="mt-6 flex justify-center">
              <Image
                src="https://ext.same-assets.com/778971269/3383822906.jpeg"
                alt="Customer using mask"
                width={500}
                height={350}
                className="rounded-lg"
              />
            </div>

            <div className="flex justify-center gap-2 mt-4">
              <span className="w-2 h-2 rounded-full bg-gray-300" />
              <span className="w-2 h-2 rounded-full bg-[#0E99A0]" />
              <span className="w-2 h-2 rounded-full bg-gray-300" />
              <span className="w-2 h-2 rounded-full bg-gray-300" />
            </div>

            <div className="text-center mt-6">
              <a href="https://www.digistore24.com/product/558312?aff=exxd00" target="_blank" rel="noopener noreferrer" className="btn-teal">Buy Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Backed by Science */}
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl text-center mb-6">Backed by Science</h2>

          <Image
            src="https://ext.same-assets.com/778971269/936051421.jpeg"
            alt="Backed by Science"
            width={600}
            height={400}
            className="w-full max-w-xl mx-auto rounded-lg mb-6"
          />

          <p className="text-sm text-center max-w-2xl mx-auto mb-4">
            The Light Therapy Facial-X7 Mask isn&apos;t just hype – it&apos;s backed by science. Light therapy has been proven to boost collagen production, reduce inflammation, and improve overall skin health.
          </p>
          <p className="text-sm text-center max-w-2xl mx-auto">
            While most masks in the market only offer 1 to two light options, we offer 7 light colors - which target specific skin concerns, providing a comprehensive skincare solution that delivers real, visible results.
          </p>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Manufactured with Care</h3>
              <p className="text-sm mb-4">
                The Light Therapy Facial-X7 Mask is made in a certified factory that meets all FDA guidelines (FDA-cleared). This means you can trust the quality and safety of our product. We ensure that every mask is crafted to the highest standards.
              </p>

              <h3 className="text-xl font-semibold mb-4">Tried and Tested</h3>
              <p className="text-sm">
                Thousands of satisfied customers and A-list celebrities can&apos;t be wrong. Join the growing number of people who have transformed their skin with Red Light Therapy. See the difference for yourself and get ready to glow!
              </p>
            </div>

            <div className="md:w-1/2">
              <div className="bg-[#0E99A0] text-white rounded-xl p-6">
                <h4 className="font-bold text-lg mb-4">Powerful, Comfortable<br />Safe and Effective</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">✓</span>
                    <span className="text-sm">Premium Food-Grade Silicone</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">✓</span>
                    <span className="text-sm">Unmatched Comfort</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">✓</span>
                    <span className="text-sm">Skin-friendly and Soft</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">✓</span>
                    <span className="text-sm">3 in 1 Spa-Grade LEDs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Dangers Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl text-center mb-8">The Hidden Dangers of Most LED Face Masks</h2>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <Image
                src="https://ext.same-assets.com/778971269/426605658.jpeg"
                alt="UV light danger"
                width={400}
                height={500}
                className="rounded-lg"
              />
            </div>

            <div className="md:w-1/2 text-sm">
              <p className="mb-4">
                Many face masks are made with cheap materials and overhyped promises that don&apos;t deliver.
              </p>
              <p className="mb-4">
                <strong>Here&apos;s the ugly truth:</strong> many of these masks do more harm than good. They might be heavy, uncomfortable, and require you to lie still for ages. Plus, <strong>some even generate high heat or UV rays,</strong> which can damage your skin in the long run.
              </p>
              <p className="mb-4">
                And those complicated instructions? They make it seem like you need a degree just to figure out how to use the product. All this while the big companies keep pushing products that are more about flashy marketing than real results.
              </p>
              <p>
                They&apos;re banking on you not noticing the difference—or not caring enough to switch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-light py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl text-center mb-6">Invest in Your Skin&apos;s Future</h2>
          <p className="text-sm text-center mb-8 max-w-2xl mx-auto">
            The Light Therapy Facial-X7 Mask offers more benefits in the long run. It&apos;s designed to last, meaning you won&apos;t need to keep buying new products. Plus, the time and money you save on dermatologist treatments or trying out multiple skincare products add up.
          </p>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 text-sm">
              <h3 className="font-semibold text-lg mb-3">Can a Mask Really Make a Difference?</h3>
              <p className="mb-4">
                You might wonder if a light therapy mask can truly transform your skin. The answer is a big YES! Our mask&apos;s 7 different light therapies target specific skin issues, from boosting collagen to reducing redness. It&apos;s like having a personal spa treatment at home.
              </p>

              <h3 className="font-semibold text-lg mb-3">Isn&apos;t It Time to Put Your Skin First?</h3>
              <p className="mb-4">
                Putting off trying the Red Light Face Mask means continuing with your same old routine and not seeing the results you want. Don&apos;t let doubts hold you back from glowing, radiant skin.
              </p>

              <h3 className="font-semibold text-lg mb-3">Safe for Everyone</h3>
              <p>
                The Light Therapy Facial-X7 Mask is designed to be gentle and non-invasive, making it safe for all skin types. You can trust that it&apos;s free from harmful UV rays and high heat.
              </p>
            </div>

            <div className="md:w-1/2">
              <Image
                src="https://ext.same-assets.com/778971269/3378934204.png"
                alt="309 Light Beads"
                width={400}
                height={500}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How Light Colors Work */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <Image
                src="https://ext.same-assets.com/778971269/2146089626.jpeg"
                alt="Woman relaxing"
                width={400}
                height={500}
                className="rounded-lg"
              />
            </div>

            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Boosts Serotonin</h3>
              <p className="text-sm mb-4">
                Light therapy has been shown to promote the production of serotonin, often called the &quot;feel-good&quot; hormone. This can enhance your mood and overall mental well-being.
              </p>

              <h3 className="text-xl font-semibold mb-4">Regulates Sleep Cycles</h3>
              <p className="text-sm mb-4">
                The increased exposure to light positively impacts your circadian rhythms, helping regulate sleep-wake cycles. This means you&apos;ll enjoy more restful sleep.
              </p>

              <h3 className="text-xl font-semibold mb-4">Prioritize Self-Care</h3>
              <p className="text-sm">
                Our mask is designed for convenience and effectiveness, empowering you to proactively prioritize self-care. It fits seamlessly into your daily routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Light Colors Work Detail */}
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl text-center mb-8">How the Light Colors Work</h2>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <ul className="check-list text-sm space-y-3">
                <li><strong className="text-red-600">Red light:</strong> Boosts collagen production for firmer, younger-looking skin.</li>
                <li><strong className="text-blue-600">Blue light:</strong> Fights acne and soothes irritation.</li>
                <li><strong className="text-green-600">Green light:</strong> Balances skin tone and reduces redness.</li>
                <li><strong className="text-yellow-500">Yellow light:</strong> Energizes your skin cells.</li>
                <li><strong className="text-purple-600">Purple light:</strong> Combines red and blue light benefits for the ultimate skin rejuvenation.</li>
                <li><strong className="text-cyan-500">Cyan light:</strong> Enhances cell energy.</li>
                <li><strong className="text-pink-500">Laser light:</strong> Penetrates deep to improve overall skin health.</li>
              </ul>
            </div>

            <div className="md:w-1/2">
              <Image
                src="https://ext.same-assets.com/778971269/2537731806.png"
                alt="7 Proven Wavelengths"
                width={400}
                height={400}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Easy to Use Video Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-lg mb-6"
          >
            <source src="https://ext.same-assets.com/778971269/2912124214.mp4" type="video/mp4" />
          </video>

          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Easy to Use</h3>
            <p className="text-sm mb-4">
              Just put on the mask, select your preferred light color, and let it work its magic. It&apos;s that simple! You can use it while watching TV, cooking, or even working on your laptop.
            </p>
            <p className="text-sm">
              Start your light therapy journey today and see the amazing benefits for yourself. With the Light Therapy Facial-X7 Mask, healthier, glowing skin is just a few sessions away!
            </p>
          </div>
        </div>
      </section>

      {/* Product Purchase Section */}
      <section id="buy" className="py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/2">
              <Image
                src="https://ext.same-assets.com/778971269/1466181411.jpeg"
                alt="Product"
                width={500}
                height={500}
                className="w-full rounded-lg"
              />

              <div className="flex gap-2 mt-4 overflow-x-auto">
                <Image
                  src="https://ext.same-assets.com/778971269/910581261.jpeg"
                  alt="Thumbnail 1"
                  width={80}
                  height={80}
                  className="rounded border-2 border-[#0E99A0]"
                />
                <Image
                  src="https://ext.same-assets.com/778971269/3207333842.jpeg"
                  alt="Thumbnail 2"
                  width={80}
                  height={80}
                  className="rounded border"
                />
                <Image
                  src="https://ext.same-assets.com/778971269/2717790861.jpeg"
                  alt="Thumbnail 3"
                  width={80}
                  height={80}
                  className="rounded border"
                />
                <Image
                  src="https://ext.same-assets.com/778971269/3884348017.jpeg"
                  alt="Thumbnail 4"
                  width={80}
                  height={80}
                  className="rounded border"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <p className="text-sm italic text-gray-600 mb-4">
                &quot;I was skeptical at first, but after just a few weeks of using the mask, my skin is clearer, firmer, and more radiant. It&apos;s like a spa treatment at home!&quot; - EMILY T.
              </p>

              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold text-[#0E99A0]">$297.87</span>
                <span className="text-xl text-red-500 line-through">$800.00</span>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Style</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:border-[#0E99A0]">
                    <input type="radio" name="style" className="accent-[#0E99A0]" />
                    <span className="text-sm">Light Therapy Facial-X7 - Face Mask Only (With Remote)</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border-2 border-[#0E99A0] rounded-lg cursor-pointer bg-[#0E99A0] text-white">
                    <input type="radio" name="style" className="accent-white" defaultChecked />
                    <span className="text-sm">Light Therapy Facial-X7 - Face Mask & Neck Bundle (**Best Value**)</span>
                  </label>
                </div>
              </div>

              <a href="https://www.digistore24.com/product/558312?aff=exxd00" target="_blank" rel="noopener noreferrer" className="btn-teal w-full block text-center mb-3">Buy Now</a>
              <p className="text-center text-sm text-gray-500">Secure Transaction</p>

              <div className="mt-6 flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Image
                  src="https://ext.same-assets.com/778971269/214278951.png"
                  alt="Money Back Guarantee"
                  width={40}
                  height={40}
                />
                <div>
                  <p className="font-bold text-sm">180 DAY MONEY BACK GUARANTEE</p>
                  <p className="text-xs text-gray-500">4 interest-free installments, or from $18.00/mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Money Back Guarantee Section */}
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-4">Any Reason Refund Guarantee</h2>
              <p className="text-sm mb-4">
                <strong>98%</strong> of our customers LOVE our products, but just in case...you can rest assured that you&apos;re making a risk-free purchase with our Any Reason Refund Guarantee.
              </p>
              <p className="text-sm mb-4">
                In the highly unlikely event that you&apos;re not completely happy with your purchase, just let us know within <strong>180 days</strong> and we&apos;ll refund your money for any reason... It&apos;s that simple.
              </p>
              <p className="text-sm">
                So go ahead and give our products a try today!
              </p>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <Image
                src="https://ext.same-assets.com/778971269/714983124.png"
                alt="180 Day Money Back Guarantee"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's in the Box */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl text-center mb-8">What&apos;s to Lose by Sticking with Regular Face Masks?</h2>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <Image
                src="https://ext.same-assets.com/778971269/1755601310.jpeg"
                alt="What's in the Box"
                width={400}
                height={400}
                className="w-full rounded-lg"
              />
            </div>

            <div className="md:w-1/2 text-sm">
              <p className="mb-4">
                So, you decide to stick with the usual face masks. What&apos;s the big deal? Well, for starters, you keep dealing with <strong>uncomfortable, bulky masks</strong> that don&apos;t fit well and feel like a chore to wear. Plus, you&apos;re probably not seeing the results you want.
              </p>
              <p className="mb-4">
                And you know that nagging doubt about whether those masks are actually doing anything for your skin? That sticks around too.
              </p>
              <p className="mb-4">
                Skipping out on our Red Light Face Mask means missing out on a bunch of amazing benefits. Imagine a mask that&apos;s comfortable, easy to use, and actually works. Picture yourself with healthier, glowing skin thanks to the power of light therapy that targets specific skin issues.
              </p>
              <p>
                It&apos;s like choosing between sticking with the same old boring skincare routine or trying out something that makes a real difference. Make the smart choice and experience the glow. You have nothing to lose except dull, tired skin!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stories */}
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl text-center mb-8">Real Stories from Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="star-rating text-lg mb-2">
                ★★★★★
              </div>
              <p className="font-semibold mb-2">Sarah</p>
              <div className="quote-mark">"</div>
              <p className="text-sm text-gray-600 -mt-6">
                &quot;As a skincare specialist, I&apos;ve always been cautious about the products I recommend. When I learned about the benefits of light therapy, I knew we had to create a mask that truly works. Being part of the team that developed this mask has been a rewarding journey, knowing we&apos;re helping people achieve healthier skin.&quot;
              </p>
              <div className="quote-mark text-right">"</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="star-rating text-lg mb-2">
                ★★★★★
              </div>
              <p className="font-semibold mb-2">Alex</p>
              <div className="quote-mark">"</div>
              <p className="text-sm text-gray-600 -mt-6">
                &quot;I&apos;ve struggled with acne and uneven skin tone for years. When we started developing the Light Therapy Facial-X7 Mask, I was skeptical. But after using it myself, I saw incredible improvements. It&apos;s now my go-to skincare tool, and I&apos;m proud to share it with others.&quot;
              </p>
              <div className="quote-mark text-right">"</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-light py-12 px-4 md:px-8">
        <div className="max-w-lg mx-auto text-center">
          <a href="https://www.digistore24.com/product/558312?aff=exxd00" target="_blank" rel="noopener noreferrer" className="btn-teal text-lg">Buy Now</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="#" className="text-sm text-gray-600 hover:text-[#0E99A0]">Return Policy</a>
            <a href="#" className="text-sm text-gray-600 hover:text-[#0E99A0]">Shipping Policy</a>
            <a href="#" className="text-sm text-gray-600 hover:text-[#0E99A0]">Terms of Service</a>
            <a href="#" className="text-sm text-gray-600 hover:text-[#0E99A0]">Privacy Policy</a>
          </div>
          <p className="text-center text-xs text-gray-500">
            2026 © Digistore24 Inc. (United States) Inc. and/or its licensors. Review legal notice here, terms of use here and privacy policy here. Contact us here.
          </p>
        </div>
      </footer>
    </main>
  );
}
