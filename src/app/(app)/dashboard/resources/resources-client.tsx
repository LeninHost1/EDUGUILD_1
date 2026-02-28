"use client";

import { useMemo, useState } from "react";

interface ResourceItem {
  id: string;
  title: string;
  description: string;
  externalLink: string;
  college: string;
  department: string;
  academicYear: string;
}

interface ResourcesClientProps {
  resources: ResourceItem[];
}

export function ResourcesClient({ resources }: ResourcesClientProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return resources;
    return resources.filter((resource) => resource.title.toLowerCase().includes(normalized));
  }, [query, resources]);

  return (
    <div className="space-y-6 p-6">
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold text-gray-900">Resources</h1>
        <input
          type="text"
          placeholder="Search resources by title..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full max-w-md rounded-md border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="py-16 text-center text-sm text-gray-500">No resources found.</div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((resource) => (
            <a
              key={resource.id}
              href={resource.externalLink}
              target="_blank"
              rel="noreferrer"
              className="block rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:border-indigo-200 hover:shadow-md"
            >
              <div className="space-y-3">
                <div>
                  <h2 className="text-base font-semibold text-gray-900">{resource.title}</h2>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">{resource.description}</p>
                </div>
                <div className="text-xs text-gray-500">
                  <p>{resource.college}</p>
                  <p>{resource.department}</p>
                  <p>{resource.academicYear}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
