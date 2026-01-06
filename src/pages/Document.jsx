import {DocumentTextIcon,ArrowDownTrayIcon,CloudArrowUpIcon,MagnifyingGlassIcon,ClockIcon,} from "@heroicons/react/24/outline";


const StatCard = ({ title, value, subtitle, icon }) => (
  <div className="bg-white border rounded-lg p-4 flex gap-3 items-center shadow-sm">
    <div className="p-2 bg-blue-50 rounded-md">{icon}</div>
    <div>
      <p className="text-xl font-semibold">{value}</p>
      <p className="text-sm font-medium">{title}</p>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  </div>
);
   const categories = [
  {
    title: "Employee Records",
    count: "92 documents",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Contracts",
    count: "56 documents",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    title: "Compliance",
    count: "34 documents",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    title: "Training",
    count: "66 documents",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
];
export default function Document() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Document Management</h1>
          <p className="text-sm text-gray-500">
            Central repository for all HR documents
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-sm">
            <ArrowDownTrayIcon className="w-4 h-4" />
            Bulk Download
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
            <CloudArrowUpIcon className="w-4 h-4" />
            Upload Document
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

        <div className="web rounded-2xl ">
        <StatCard 
          title="Total Documents"
          value="248"
          subtitle="All files"
          icon={<DocumentTextIcon className="w-6 h-6 text-blue-600" />}
          />
        </div>

        <div className="web rounded-2xl ">
        <StatCard
          title="Policies"
          value="45"
          subtitle="Company policies"
          icon={<DocumentTextIcon className="w-6 h-6 text-blue-600" />}
        />
        </div>

        <div className="web rounded-2xl ">
        <StatCard
          title="Forms & Templates"
          value="82"
          subtitle="Ready to use"
          icon={<DocumentTextIcon className="w-6 h-6 text-blue-600" />}
        />
        </div>

        <div className="web rounded-2xl ">
        <StatCard
          title="Expiring Soon"
          value="7"
          subtitle="Requires renewal"
          icon={<ClockIcon className="w-6 h-6 text-blue-600" />}
        />
        </div>

      </div>

      {/* Search & Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="relative flex-1">
          <MagnifyingGlassIcon className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search documents..."
            className="w-full pl-10 pr-4 py-2 border rounded-md text-sm"
          />
        </div>
        <button className="px-4 py-2 border rounded-md text-sm">
          Filter by Type
        </button>
        <button className="px-4 py-2 border rounded-md text-sm">
          Filter by Date
        </button>
      </div>

      {/* Policies & Forms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Company Policies */}
        <div className="bg-white border rounded-lg p-4">
          <h2 className="font-semibold mb-1">Company Policies</h2>
          <p className="text-xs text-gray-500 mb-4">
            Official policy documents
          </p>

          <div className="space-y-3">
            {[
              {
                name: "Employee Handbook 2024",
                meta: "Updated: 2024-01-15 • 2.4 MB",
              },
              {
                name: "Leave Policy",
                meta: "Updated: 2024-03-10 • 1.2 MB",
              },
            ].map((doc, i) => (
              <div
                key={i}
                className="flex justify-between items-center border rounded-md p-3"
              >
                <div className="flex gap-3 items-center">
                  <DocumentTextIcon className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium">{doc.name}</p>
                    <p className="text-xs text-gray-500">{doc.meta}</p>
                  </div>
                </div>
                <ArrowDownTrayIcon className="w-4 h-4 cursor-pointer" />
              </div>
            ))}
          </div>
        </div>

        {/* Forms & Templates */}
        <div className="bg-white border rounded-lg p-4">
          <h2 className="font-semibold mb-1">Forms & Templates</h2>
          <p className="text-xs text-gray-500 mb-4">
            Downloadable forms and templates
          </p>

          <div className="space-y-3">
            {[
              { name: "Tax Declaration Form", tag: "Form • 856 KB" },
              { name: "Offer Letter Template", tag: "Template • 845 KB" },
            ].map((doc, i) => (
              <div
                key={i}
                className="flex justify-between items-center border rounded-md p-3"
              >
                <div className="flex gap-3 items-center">
                  <DocumentTextIcon className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium">{doc.name}</p>
                    <p className="text-xs text-gray-500">{doc.tag}</p>
                  </div>
                </div>
                <ArrowDownTrayIcon className="w-4 h-4 cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
      </div>

{/* document categories */}
    <div className="bg-white border rounded-xl p-6 shadow-sm">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-900">
        Document Categories
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Browse documents by category
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 border rounded-xl bg-white shadow-sm hover:shadow-md transition"
          >
            {/* Icon */}
            <div className={`p-3 rounded-lg ${item.bg}`}>
              <DocumentTextIcon className={`w-6 h-6 ${item.color}`} />
            </div>

            {/* Text */}
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {item.title}
              </p>
              <p className="text-xs text-gray-500">
                {item.count}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  

      {/* Expiry Reminders */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
        <h2 className="font-semibold text-orange-700 mb-3">
          Expiry Reminders
        </h2>

        <div className="space-y-3">
          {[
            { name: "Professional Tax Registration", date: "Dec 31, 2024" },
            { name: "ISO Certification", date: "Jan 15, 2025" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-white border rounded-md p-3"
            >
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">
                  Expires: {item.date}
                </p>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md">
                Renew
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
