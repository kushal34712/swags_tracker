import React from "react";
import { TrackingData } from "@/types";
import Link from "next/link";

interface Props {
  data: TrackingData;
}

const TrackingCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 border border-gray-200 max-w-96">
      <h2 className="text-xl font-semibold mb-4">Tracking Details</h2>
      <p className="mb-2">
        <strong className="font-medium text-gray-700">Id:</strong> {data.Id}
      </p>
      <p className="mb-2">
        <strong className="font-medium text-gray-700">Last Updated:</strong>{" "}
        {data["Last Updated"]}
      </p>
      <p className="mb-2">
        <strong className="font-medium text-gray-700">Reference No.:</strong>{" "}
        {data["Reference No."]}
      </p>
      <p className="mb-2">
        <strong className="font-medium text-gray-700">Destination:</strong>{" "}
        {data.Destination}
      </p>
      <p className="mb-2">
        <strong className="font-medium text-gray-700">Pincode:</strong>{" "}
        {data[" Pincode"]}
      </p>
      {data["Delivered too"] && (
        <p className="mb-2">
          <strong className="font-medium text-gray-700">Delivered too:</strong>{" "}
          {data["Delivered too"]}
        </p>
      )}
      <p>
        <strong className="font-medium text-gray-700">Tracking Link:</strong>{" "}
        <Link
          href={data["Links"]}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          {data["Tracking Link"]}
        </Link>
      </p>
    </div>
  );
};

export default TrackingCard;
