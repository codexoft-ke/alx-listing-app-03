import React from "react";

const BookingForm: React.FC = () => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Contact Detail</h2>
    <form>
      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-700">First Name</label>
          <input type="text" className="border p-2 w-full mt-2 rounded" placeholder="John" />
        </div>
        <div>
          <label className="block text-sm text-gray-700">Last Name</label>
          <input type="text" className="border p-2 w-full mt-2 rounded" placeholder="Doe" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm text-gray-700">Email</label>
          <input type="email" className="border p-2 w-full mt-2 rounded" placeholder="john@example.com" />
        </div>
        <div>
          <label className="block text-sm text-gray-700">Phone Number</label>
          <input type="text" className="border p-2 w-full mt-2 rounded" placeholder="(555) 555-5555" />
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="text-xl font-semibold mt-6">Pay with</h2>
      <div className="mt-4">
        <label className="block text-sm text-gray-700">Card Number</label>
        <input type="text" className="border p-2 w-full mt-2 rounded" placeholder="1234 5678 9012 3456" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm text-gray-700">Expiration Date</label>
          <input type="text" className="border p-2 w-full mt-2 rounded" placeholder="MM/YY" />
        </div>
        <div>
          <label className="block text-sm text-gray-700">CVV</label>
          <input type="text" className="border p-2 w-full mt-2 rounded" placeholder="123" />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
      <div className="mt-4">
        <label className="block text-sm text-gray-700">Street Address</label>
        <input type="text" className="border p-2 w-full mt-2 rounded" placeholder="123 Main St" />
      </div>
      <div className="mt-4">
        <label className="block text-sm text-gray-700">Apt/Suite</label>
        <input type="text" className="border p-2 w-full mt-2 rounded" placeholder="Apt 4B" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm text-gray-700">City</label>
          <input type="text" className="border p-2 w-full mt-2 rounded" placeholder="City" />
        </div>
        <div>
          <label className="block text-sm text-gray-700">State</label>
          <input type="text" className="border p-2 w-full mt-2 rounded" placeholder="State" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm text-gray-700">Zip Code</label>
          <input type="text" className="border p-2 w-full mt-2 rounded" placeholder="12345" />
        </div>
        <div>
          <label className="block text-sm text-gray-700">Country</label>
          <input type="text" className="border p-2 w-full mt-2 rounded" placeholder="Country" />
        </div>
      </div>

      {/* Submit Button */}
      <button type="button" className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full">
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;
