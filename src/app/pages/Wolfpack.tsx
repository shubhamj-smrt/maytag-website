import { Link } from "react-router";
import {
  GraduationCap,
  Clock,
  Wifi,
  CreditCard,
  MapPin,
  Calendar,
  Sparkles,
  Users,
  Shield,
  Zap,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function WolfpackPage() {
  const studentBenefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Access",
      description:
        "Study all night? We're open around the clock to fit your schedule.",
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Free High-Speed WiFi",
      description:
        "Finish assignments while your laundry runs with our complimentary WiFi.",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Student Discounts",
      description:
        "Show your NCSU ID and save on every wash. Student budget-friendly.",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Campus Shuttle Route",
      description:
        "Located conveniently on the Wolfline route for easy access.",
    },
  ];

  const quickServices = [
    {
      title: "Express Wash",
      time: "30 minutes",
      price: "$3.50",
      description:
        "Perfect for quick turnarounds between classes",
    },
    {
      title: "Deep Clean",
      time: "45 minutes",
      price: "$4.50",
      description: "Ideal for bedding and heavily soiled items",
    },
    {
      title: "Delicate Care",
      time: "40 minutes",
      price: "$4.00",
      description: "Special cycle for your interview outfits",
    },
  ];

  const studentTips = [
    {
      icon: <Calendar className="w-6 h-6" />,
      tip: "Best Times to Visit",
      detail:
        "Weekday mornings (8-11am) are typically less busy",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      tip: "Bulk Wash Days",
      detail: "Every Sunday: 20% off loads over 3 machines",
    },
    {
      icon: <Users className="w-6 h-6" />,
      tip: "Group Discounts",
      detail: "Come with 3+ friends and get $1 off each load",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      tip: "Safe & Secure",
      detail: "24/7 security cameras and well-lit facility",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with NCSU Theme */}
      <section className="relative bg-[#CC0000] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBjYW1wdXN8ZW58MXx8fHwxNzQxODk2MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="NCSU Students"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 py-20 sm:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <GraduationCap className="w-5 h-5 text-[#00bfb3]" />
              <span className="text-sm">
                Exclusively for NC State Wolfpack
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Laundry Made Easy for Wolfpack Students
            </h1>
            <p className="text-lg sm:text-xl text-gray-100 mb-8">
              Focus on your studies, not your laundry.
              Student-friendly prices, convenient location, and
              amenities designed with you in mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pricing"
                className="bg-[#00bfb3] text-white px-8 py-4 rounded hover:bg-[#00a89d] transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                View Student Pricing
              </Link>
              <Link
                to="/contact"
                className="bg-white text-[#CC0000] px-8 py-4 rounded hover:bg-gray-100 transition-colors text-center"
              >
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="bg-gradient-to-r from-[#CC0000] to-[#A00000] text-white py-4">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#00bfb3] rounded-full p-2">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-lg">
                  Student Special: 15% Off First Visit
                </p>
                <p className="text-sm text-gray-100">
                  Show your NCSU Student ID
                </p>
              </div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-white/30"></div>
            <div className="flex items-center gap-3">
              <div className="bg-[#00bfb3] rounded-full p-2">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold">
                  Sunday Bulk Wash: 20% Off
                </p>
                <p className="text-sm text-gray-100">
                  3+ machines
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Benefits Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Built for Student Life
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We understand the unique needs of college
              students. That's why we've designed our services
              to make your life easier.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {studentBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-6 border-2 border-gray-200 rounded-lg hover:border-[#00bfb3] hover:shadow-xl transition-all"
              >
                <div className="text-[#CC0000] mb-4 group-hover:scale-110 transition-transform group-hover:text-[#00bfb3]">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Service Options */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Fast Service, Student Prices
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the wash cycle that fits your schedule and
              budget. All prices include student discount.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-[#CC0000] hover:shadow-xl transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-black">
                    {service.title}
                  </h3>
                  <div className="bg-[#00bfb3] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {service.price}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#CC0000] mb-4">
                  <Clock className="w-4 h-4" />
                  <span className="font-semibold">
                    {service.time}
                  </span>
                </div>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/pricing"
              className="inline-block bg-black text-white px-8 py-4 rounded hover:bg-gray-800 transition-colors"
            >
              See Full Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Student Tips & Info */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
                Insider Tips for Wolfpack Students
              </h2>
              <p className="text-gray-600 mb-8">
                Make the most of your laundry time with these
                student-tested tips and exclusive perks.
              </p>

              <div className="space-y-4">
                {studentTips.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#00bfb3] transition-all"
                  >
                    <div className="text-[#CC0000] mt-1 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">
                        {item.tip}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-[#CC0000] text-white rounded-lg">
                <h4 className="font-bold text-lg mb-2">
                  Wolfpack Rewards Program
                </h4>
                <p className="text-sm mb-4">
                  Earn points with every wash! Get your 10th
                  load free when you join our student loyalty
                  program.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-[#00bfb3] text-white px-6 py-2 rounded hover:bg-[#00a89d] transition-colors text-sm"
                >
                  Sign Up Today
                </Link>
              </div>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudCUyMHN0dWR5aW5nJTIwbGFwdG9wfGVufDF8fHx8MTc0MTg5NjAwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Student studying"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl max-w-xs">
                <p className="text-sm text-gray-600 italic mb-2">
                  "I can finish my homework while my laundry
                  runs. The WiFi is fast and there's plenty of
                  seating!"
                </p>
                <p className="font-semibold text-black">
                  - Alex M., NCSU Junior
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-black mb-6">
                  Easy to Find, Easy to Reach
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-black mb-2 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#CC0000]" />
                      Location
                    </h3>
                    <p className="text-gray-600 ml-7">
                      Just minutes from campus on the Wolfline
                      Route 7
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-[#CC0000]" />
                      Hours
                    </h3>
                    <p className="text-gray-600 ml-7">
                      Open 24/7 - Yes, even during finals week!
                    </p>
                  </div>
                  <div className="bg-[#00bfb3]/10 border-l-4 border-[#00bfb3] p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Pro Tip:</strong> Download the
                      Wolfline app to track the bus in real-time
                      and plan your laundry trips.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-block bg-[#CC0000] text-white px-8 py-4 rounded hover:bg-[#A00000] transition-colors"
                  >
                    Get Directions & Contact Info
                  </Link>
                </div>
              </div>

              <div className="relative h-64 lg:h-auto">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXVuZHJvbWF0JTIwZXh0ZXJpb3IlMjBidWlsZGluZ3xlbnwxfHx8fDE3NDE4OTYwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Laundromat exterior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#CC0000] to-[#00bfb3]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <GraduationCap className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Go Pack! Clean Clothes Start Here
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of Wolfpack students who trust us with
            their laundry. Don't forget your student ID for
            instant savings!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-white text-[#CC0000] px-8 py-4 rounded hover:bg-gray-100 transition-colors font-semibold"
            >
              Visit Us Today
            </Link>
            <Link
              to="/services"
              className="inline-block bg-black text-white px-8 py-4 rounded hover:bg-gray-800 transition-colors"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}