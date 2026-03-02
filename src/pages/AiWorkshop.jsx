import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CalendarDays, MapPin, Users, CheckCircle2 } from "lucide-react";

export default function AiWorkshop() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      attendeeType: formData.get("attendeeType"),
      submittedAt: new Date().toISOString(),
    };

    try {
      const res = await fetch("/api/workshop-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Registration failed");
      setSuccess(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FEFCF5] text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-900/10 bg-[#FEFCF5]/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/favicon.svg" alt="Charles Nwankpa" className="h-10 w-10" />
            <div className="leading-tight">
              <div className="text-sm font-semibold">Charles Nwankpa</div>
              <div className="text-xs text-neutral-600">Founder, Gen3Block • Production AI</div>
            </div>
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to site
          </a>
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto max-w-xl px-4 py-14">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-2 w-2 bg-amber-400 rounded-sm" />
            <p className="text-xs tracking-[0.22em] uppercase text-neutral-600">Gen3Block</p>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Free AI Skills Workshop
          </h1>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-none border border-neutral-900/15 bg-white px-3 py-1 text-sm text-neutral-800">
              <CalendarDays className="h-4 w-4" /> Wednesday • 10:00am – 12:30pm
            </span>
            <span className="inline-flex items-center gap-2 rounded-none border border-neutral-900/15 bg-white px-3 py-1 text-sm text-neutral-800">
              <MapPin className="h-4 w-4" /> Northampton
            </span>
            <span className="inline-flex items-center gap-2 rounded-none border border-neutral-900/15 bg-white px-3 py-1 text-sm text-neutral-800">
              <Users className="h-4 w-4" /> Limited to 15 participants
            </span>
          </div>
        </div>

        {success ? (
          <Card className="rounded-none border-neutral-900/15 bg-white">
            <CardContent className="p-8 text-center">
              <div className="h-12 w-12 mx-auto rounded-none border border-neutral-900/15 bg-amber-50 grid place-items-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-amber-600" />
              </div>
              <h2 className="text-xl font-semibold">You're Registered</h2>
              <p className="mt-3 text-neutral-600 leading-relaxed">
                Thank you for reserving your seat. You'll receive a confirmation email shortly.
              </p>
              <a
                href="/"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-400 text-neutral-900 px-5 py-2.5 text-sm font-medium hover:bg-amber-500 transition-all"
              >
                Back to site
              </a>
            </CardContent>
          </Card>
        ) : (
          <Card className="rounded-none border-neutral-900/15 bg-white">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    name="fullName"
                    required
                    className="w-full rounded-none border border-neutral-900/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-none border border-neutral-900/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    name="phone"
                    className="w-full rounded-none border border-neutral-900/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">You are *</label>
                  <select
                    name="attendeeType"
                    required
                    className="w-full rounded-none border border-neutral-900/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="">Select one</option>
                    <option>Job Seeker</option>
                    <option>Small Business Owner</option>
                    <option>Community Member</option>
                    <option>Student</option>
                    <option>Other</option>
                  </select>
                </div>

                {error && <p className="text-sm text-red-600">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-amber-400 text-neutral-900 py-3 font-medium hover:bg-amber-500 transition-all disabled:opacity-60 shadow-sm"
                >
                  {loading ? "Reserving Seat..." : "Reserve My Seat"}
                </button>
              </form>
            </CardContent>
          </Card>
        )}

        <p className="mt-6 text-center text-xs text-neutral-500">
          Unit F5B, Barratt House, Kingsthorpe Road, Northampton NN2 6EZ
        </p>
      </div>
    </div>
  );
}
