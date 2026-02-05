import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Top Guarantee Banner */}
      <div className="bg-[#0E99A0] text-white py-3 px-4 text-center">
        <p className="text-sm md:text-base font-semibold flex items-center justify-center gap-2">
          <span className="text-xl">🛡️</span>
          180-TAGE GELD-ZURÜCK-GARANTIE - Kein Risiko, nur strahlende Haut!
          <span className="text-xl">🛡️</span>
        </p>
      </div>

      {/* Top Security Bar */}
      <div className="bg-white py-2 px-4 flex items-center justify-center gap-6 border-b">
        <div className="flex items-center gap-2">
          <Image
            src="https://ext.same-assets.com/778971269/3830594768.svg"
            alt="Secure Order"
            width={24}
            height={24}
          />
          <span className="text-sm font-medium text-gray-600">Sichere Bestellung</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg">🛡️</span>
          <span className="text-sm font-medium text-[#0E99A0]">180 Tage Garantie</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-8 px-4 md:px-8 max-w-4xl mx-auto">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-center leading-relaxed mb-4">
          BREAKING NEWS!: How You Can{" "}
          <span className="text-[#E8847C]">Say Goodbye to Your Skin Problems</span>: The{" "}
          <strong>FDA Cleared</strong>, <strong>100% Natural</strong>, 10-Minute{" "}
          <span className="underline text-[#E8847C]">Revolutionary Skincare</span> Routine Everyone&apos;s Talking About!
        </h1>

        {/* Guarantee Hero Badge */}
        <div className="bg-gradient-to-r from-[#0E99A0] to-[#0A7A80] text-white rounded-xl p-6 mb-8 text-center shadow-lg">
          <div className="flex items-center justify-center gap-4 mb-3">
            <Image
              src="https://ext.same-assets.com/778971269/714983124.png"
              alt="180 Day Guarantee"
              width={80}
              height={80}
            />
            <div className="text-left">
              <p className="text-2xl md:text-3xl font-bold">180 TAGE</p>
              <p className="text-lg md:text-xl">GELD-ZURÜCK-GARANTIE</p>
            </div>
          </div>
          <p className="text-sm opacity-90">
            Testen Sie risikofrei! Nicht zufrieden? Volle Rückerstattung - keine Fragen!
          </p>
        </div>

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

            {/* Inline Guarantee */}
            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 my-4">
              <p className="text-sm font-semibold text-center">
                🛡️ Geschützt durch unsere <span className="text-[#0E99A0]">180-Tage Geld-zurück-Garantie</span> - Null Risiko!
              </p>
            </div>
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

      {/* Big Guarantee Section - Early */}
      <section className="py-12 px-4 md:px-8 bg-gradient-to-b from-[#E8F7F7] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            <span className="text-[#0E99A0]">180 TAGE</span> GELD-ZURÜCK-GARANTIE
          </h2>
          <p className="text-lg md:text-xl mb-6 text-gray-700">
            Wir sind SO überzeugt von unserem Produkt, dass wir Ihnen <strong>volle 6 Monate</strong> Zeit geben, es zu testen!
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Image
              src="https://ext.same-assets.com/778971269/714983124.png"
              alt="180 Day Money Back Guarantee"
              width={200}
              height={200}
              className="drop-shadow-lg"
            />
            <div className="text-left max-w-md">
              <ul className="space-y-3 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <span><strong>Kein Risiko:</strong> Testen Sie 180 Tage lang völlig risikofrei</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <span><strong>Keine Fragen:</strong> Nicht zufrieden? Geld zurück - so einfach!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <span><strong>Volle Erstattung:</strong> 100% Ihres Geldes zurück, garantiert</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <span><strong>98% Zufriedenheit:</strong> Fast alle Kunden lieben es!</span>
                </li>
              </ul>
            </div>
          </div>

          <a
            href="https://www.digistore24.com/product/558312?aff=exxd00"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-teal text-lg mt-8 inline-block"
          >
            Jetzt Risikofrei Bestellen
          </a>
          <p className="text-sm text-gray-500 mt-2">🛡️ Geschützt durch 180-Tage Garantie</p>
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

              {/* Guarantee reminder */}
              <div className="mt-6 p-3 bg-[#0E99A0] text-white rounded-lg text-center text-sm">
                🛡️ 180 Tage testen - Nicht zufrieden? Geld zurück!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 - 180 Day Guarantee - NOW FIRST */}
          <div className="bg-gradient-to-br from-[#0E99A0] to-[#0A7A80] rounded-xl p-6 shadow-lg text-center text-white md:col-span-2">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Image
                src="https://ext.same-assets.com/778971269/714983124.png"
                alt="180 Day Guarantee"
                width={120}
                height={120}
              />
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">180-Tage Geld-Zurück-Garantie</h3>
                <p className="text-sm opacity-90 mb-3">
                  Wir vertrauen unserem Produkt zu 100%. Deshalb geben wir Ihnen volle 6 Monate, um es zu testen. Nicht zufrieden? Volle Rückerstattung, keine Fragen gestellt!
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs">Kein Risiko</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs">Volle Erstattung</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs">Keine Fragen</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Gentle and Safe */}
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

          {/* Card 3 - See Real Results */}
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

          {/* Card 4 - FDA-Cleared */}
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

          {/* Card 5 - Self-Care */}
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
                <p className="text-center text-xs text-gray-500 mt-2">🛡️ 180 Tage Garantie - Testen Sie risikofrei!</p>
              </div>
            </div>
          </div>
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

            <div className="text-center mt-6">
              <a href="https://www.digistore24.com/product/558312?aff=exxd00" target="_blank" rel="noopener noreferrer" className="btn-teal">Jetzt Risikofrei Bestellen</a>
              <p className="text-sm text-gray-500 mt-2">🛡️ 180 Tage Geld-zurück-Garantie</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Purchase Section */}
      <section id="buy" className="py-12 px-4 md:px-8 bg-gray-50">
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
              {/* Guarantee Badge at top */}
              <div className="bg-gradient-to-r from-[#0E99A0] to-[#0A7A80] text-white rounded-lg p-4 mb-4 flex items-center gap-3">
                <Image
                  src="https://ext.same-assets.com/778971269/714983124.png"
                  alt="Guarantee"
                  width={60}
                  height={60}
                />
                <div>
                  <p className="font-bold">180-TAGE GARANTIE</p>
                  <p className="text-xs opacity-90">Nicht zufrieden? Geld zurück!</p>
                </div>
              </div>

              <p className="text-sm italic text-gray-600 mb-4">
                &quot;I was skeptical at first, but after just a few weeks of using the mask, my skin is clearer, firmer, and more radiant. It&apos;s like a spa treatment at home!&quot; - EMILY T.
              </p>

              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold text-[#0E99A0]">$297.87</span>
                <span className="text-xl text-red-500 line-through">$800.00</span>
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">-63%</span>
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

              <a href="https://www.digistore24.com/product/558312?aff=exxd00" target="_blank" rel="noopener noreferrer" className="btn-teal w-full block text-center mb-2 text-lg">
                Jetzt Risikofrei Bestellen
              </a>
              <p className="text-center text-sm text-[#0E99A0] font-semibold mb-4">🛡️ 180 Tage Geld-zurück-Garantie</p>

              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="https://ext.same-assets.com/778971269/714983124.png"
                    alt="Money Back Guarantee"
                    width={50}
                    height={50}
                  />
                  <div>
                    <p className="font-bold text-sm">180 TAGE GELD-ZURÜCK-GARANTIE</p>
                    <p className="text-xs text-gray-600">Testen Sie risikofrei! Nicht zufrieden = Geld zurück!</p>
                    <p className="text-xs text-gray-500 mt-1">4 zinsfreie Raten möglich, ab $18.00/Monat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN Money Back Guarantee Section - Expanded */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-[#0E99A0] to-[#0A7A80] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              180 TAGE GELD-ZURÜCK-GARANTIE
            </h2>
            <p className="text-xl opacity-90">
              Ihr Kauf ist zu 100% geschützt. Kein Risiko, nur strahlende Haut!
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="https://ext.same-assets.com/778971269/714983124.png"
                alt="180 Day Money Back Guarantee"
                width={280}
                height={280}
                className="drop-shadow-2xl"
              />
            </div>

            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Unsere Zufriedenheitsgarantie</h3>
              <p className="mb-4">
                <strong>98%</strong> unserer Kunden LIEBEN unsere Produkte. Aber für den Fall, dass Sie zu den 2% gehören, die nicht vollständig zufrieden sind...
              </p>
              <p className="mb-4">
                Lassen Sie es uns einfach innerhalb von <strong>180 Tagen</strong> wissen, und wir erstatten Ihnen <strong>100% Ihres Geldes zurück</strong> - ohne Fragen!
              </p>

              <div className="bg-white/20 rounded-lg p-4 mb-6">
                <h4 className="font-bold mb-2">Das bedeutet für Sie:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-300">★</span>
                    6 volle Monate Zeit zum Testen
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-300">★</span>
                    Volle Rückerstattung bei Unzufriedenheit
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-300">★</span>
                    Keine komplizierten Rückgabebedingungen
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-300">★</span>
                    Freundlicher Kundenservice
                  </li>
                </ul>
              </div>

              <a
                href="https://www.digistore24.com/product/558312?aff=exxd00"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#0E99A0] px-8 py-4 rounded-lg font-bold text-lg inline-block hover:bg-gray-100 transition-colors"
              >
                Jetzt Risikofrei Bestellen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why 180 Days Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-center mb-8">Warum 180 Tage Garantie?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="font-bold mb-2">Wissenschaftlich bewiesen</h3>
              <p className="text-sm text-gray-600">
                Studien zeigen, dass sichtbare Ergebnisse nach 6-8 Wochen eintreten. Wir geben Ihnen 180 Tage!
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="font-bold mb-2">Wir vertrauen unserem Produkt</h3>
              <p className="text-sm text-gray-600">
                Wir sind so überzeugt von der Qualität, dass wir dieses Risiko gerne eingehen.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="font-bold mb-2">Ihre Zufriedenheit zählt</h3>
              <p className="text-sm text-gray-600">
                Ihr Wohlbefinden steht an erster Stelle. Deshalb machen wir es Ihnen so einfach wie möglich.
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
              <div className="quote-mark">&ldquo;</div>
              <p className="text-sm text-gray-600 -mt-6">
                &quot;As a skincare specialist, I&apos;ve always been cautious about the products I recommend. When I learned about the benefits of light therapy, I knew we had to create a mask that truly works. Being part of the team that developed this mask has been a rewarding journey, knowing we&apos;re helping people achieve healthier skin.&quot;
              </p>
              <div className="quote-mark text-right">&rdquo;</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="star-rating text-lg mb-2">
                ★★★★★
              </div>
              <p className="font-semibold mb-2">Alex</p>
              <div className="quote-mark">&ldquo;</div>
              <p className="text-sm text-gray-600 -mt-6">
                &quot;I&apos;ve struggled with acne and uneven skin tone for years. When we started developing the Light Therapy Facial-X7 Mask, I was skeptical. But after using it myself, I saw incredible improvements. It&apos;s now my go-to skincare tool, and I&apos;m proud to share it with others.&quot;
              </p>
              <div className="quote-mark text-right">&rdquo;</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Guarantee */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-[#E8F7F7] to-white">
        <div className="max-w-lg mx-auto text-center">
          <Image
            src="https://ext.same-assets.com/778971269/714983124.png"
            alt="180 Day Guarantee"
            width={120}
            height={120}
            className="mx-auto mb-6"
          />
          <h2 className="text-2xl font-bold mb-4">Bereit für strahlende Haut?</h2>
          <p className="text-gray-600 mb-6">
            Testen Sie völlig risikofrei mit unserer 180-Tage Geld-zurück-Garantie!
          </p>
          <a href="https://www.digistore24.com/product/558312?aff=exxd00" target="_blank" rel="noopener noreferrer" className="btn-teal text-lg">
            Jetzt Risikofrei Bestellen
          </a>
          <p className="text-sm text-[#0E99A0] font-semibold mt-3">🛡️ 180 Tage Geld-zurück-Garantie</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <p className="text-sm text-[#0E99A0] font-semibold">🛡️ Alle Käufe sind durch unsere 180-Tage Geld-zurück-Garantie geschützt</p>
          </div>
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
