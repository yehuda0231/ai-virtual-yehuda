export default function ContactPage() {
    return (
      <section className="pt-28 px-6 max-w-xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Kontak</h1>
          <p className="mt-3 text-gray-400">
            Tertarik berdiskusi, belajar bersama, atau berkolaborasi?  
            Jangan ragu untuk menghubungi saya.
          </p>
        </div>
  
        {/* Contact Card */}
        <div
          className="rounded-2xl bg-neutral-900/60 border border-white/10
                     p-6 space-y-5 backdrop-blur
                     hover:border-white/20 transition-all duration-300"
        >
          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
              📧
            </div>
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-medium">yehuda.ai.bot@gmail.com</p>
            </div>
          </div>
  
         {/* Instagram */}
<div className="flex items-center gap-4">
  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
    📸
  </div>
  <div>
    <p className="text-sm text-gray-400">Instagram</p>
    <p className="font-medium">@yehudayura_</p>
  </div>
</div>

{/* LinkedIn */}
<div className="flex items-center gap-4">
  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
    🔗
  </div>
  <div>
    <p className="text-sm text-gray-400">LinkedIn</p>
    <p className="font-medium">linkedin.com/in/yehuda-yura</p>
  </div>
</div>


        </div>
      </section>
    );
  }
  