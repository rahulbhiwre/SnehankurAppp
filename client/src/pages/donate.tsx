import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaQrcode, FaUniversity, FaMobileAlt } from "react-icons/fa";

export default function Donate() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Our Cause</h1>
          <p className="text-lg text-gray-600">
            Your contribution helps us provide better care and opportunities for our children
          </p>
        </div>

        <div className="space-y-8">
          {/* UPI Section */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <FaMobileAlt className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">UPI Payment</h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Scan the QR code or use our UPI ID for instant transfer
              </p>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-medium text-gray-900 mb-2">UPI ID: snehankur@upi</p>
                <Button variant="outline" className="w-full sm:w-auto">
                  <FaQrcode className="mr-2 h-4 w-4" />
                  Show QR Code
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Bank Transfer Section */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <FaUniversity className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Bank Transfer</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900">Account Name</p>
                  <p className="text-gray-600">Snehankur Orphanage Trust</p>
                </div>
                <Separator />
                <div>
                  <p className="font-medium text-gray-900">Account Number</p>
                  <p className="text-gray-600">1234 5678 9012 3456</p>
                </div>
                <Separator />
                <div>
                  <p className="font-medium text-gray-900">IFSC Code</p>
                  <p className="text-gray-600">ABCD0123456</p>
                </div>
                <Separator />
                <div>
                  <p className="font-medium text-gray-900">Bank Name</p>
                  <p className="text-gray-600">Sample Bank</p>
                </div>
                <Separator />
                <div>
                  <p className="font-medium text-gray-900">Branch</p>
                  <p className="text-gray-600">Main Branch</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center text-gray-600 text-sm">
            <p>For any queries related to donations, please contact us at:</p>
            <p className="font-medium">donations@snehankur.org</p>
          </div>
        </div>
      </div>
    </div>
  );
}
