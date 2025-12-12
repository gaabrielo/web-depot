export default function Coupon() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900 p-4">
      <div
        className="relative w-full max-w-sm bg-white rounded-3xl overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle 20px at 0% 50%, transparent 20px),
            radial-gradient(circle 20px at 100% 50%, transparent 20px)
          `,
          backgroundPosition: '0 50%, 100% 50%',
          backgroundRepeat: 'repeat-y',
          backgroundSize: '40px 40px',
        }}
      >
        {/* Top Section */}
        <div className="pt-12 pb-6 px-8 text-center border-b-2 border-dashed border-blue-900">
          <div className="mb-6 text-6xl">🍔🍟🌭</div>
          <h2 className="text-4xl font-bold text-gray-800 mb-2">FREE FOOD</h2>
          <p className="text-gray-600 text-lg">
            Your next food order will be free
          </p>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 pb-8 px-8 text-center">
          <p className="text-5xl font-bold text-gray-800 mb-2 tracking-wider">
            F478301294
          </p>
          <p className="text-gray-400 mb-6">Valid up to June 10</p>
          <button className="w-full bg-blue-900 text-white font-bold py-3 rounded-full hover:bg-blue-800 transition">
            REDEEM NOW
          </button>
        </div>
      </div>
    </div>
  );
}
