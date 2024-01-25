'use client'
import { useState } from 'react';

const TrackOrder = () => {
    const [orderId, setOrderId] = useState('');
    const [trackingId, setTrackingId] = useState('');
    const [searchBy, setSearchBy] = useState('orderId'); // Default search option
    const [result, setResult] = useState(null);

    const handleTrackOrder = () => {
        // Implement logic to fetch order details based on orderId or trackingId
        // For now, just a placeholder message
        setResult(`Tracking order with ${searchBy === 'orderId' ? 'Order ID' : 'Tracking ID'}: ${searchBy === 'orderId' ? orderId : trackingId}`);
    };

    return (
        <>
            <div className='flex bg-red-50 py-10 justify-center items-center'>
                <h1 className='font-extrabold text-4xl'>Track your Order</h1>
            </div>
            <div className="container text-gray-600 bg-gray-50 mx-auto">
                <div className="mx-auto text-center max-w-screen-md p-4">
                    <p className="text-gray-700 mb-4">
                        Thank you for choosing Zagrad! We appreciate your trust in our products. To track the status of your order, please enter your Tracking ID or Order ID in the form below.
                    </p>
                    {/* <p className="text-gray-700 mb-4">
                    You can find the Tracking ID and Order ID in the confirmation Email/SMS that was sent to you once your order has been shipped. If you have any questions or need assistance, feel free to contact our customer support.
                </p> */}
                </div>


                <div className="flex flex-col space-y-4 max-w-md mx-auto">
                    <div className="mb-4">
                        <label className="text-sm font-semibold">Search By:</label>
                        <div className="flex space-x-4">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="searchByOrderId"
                                    name="searchBy"
                                    value="orderId"
                                    checked={searchBy === 'orderId'}
                                    onChange={() => setSearchBy('orderId')}
                                />
                                <label htmlFor="searchByOrderId" className="ml-2">Order ID</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="searchByTrackingId"
                                    name="searchBy"
                                    value="trackingId"
                                    checked={searchBy === 'trackingId'}
                                    onChange={() => setSearchBy('trackingId')}
                                />
                                <label htmlFor="searchByTrackingId" className="ml-2">Tracking ID</label>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="text-sm font-semibold" htmlFor={searchBy}>{searchBy === 'orderId' ? 'Order ID' : 'Tracking ID'}:</label>
                        <input
                            type="text"
                            id={searchBy}
                            className="w-full px-4 py-2 border rounded-md"
                            placeholder={`Enter ${searchBy === 'orderId' ? 'Order ID' : 'Tracking ID'}`}
                            value={searchBy === 'orderId' ? orderId : trackingId}
                            onChange={(e) => (searchBy === 'orderId' ? setOrderId(e.target.value) : setTrackingId(e.target.value))}
                        />
                    </div>

                    <button
                        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
                        onClick={handleTrackOrder}
                    >
                        Track Order
                    </button>

                    {result && <p className="mt-4">{result}</p>}
                </div>
                <div className="mx-auto text-center max-w-screen-md p-4">
                    {/* <p className="text-gray-700 mb-4">
                        Thank you for choosing Zagrad! We appreciate your trust in our products. To track the status of your order, please enter your Tracking ID or Order ID in the form below.
                    </p> */}
                    <p className="text-gray-700 mb-4">
                    You can find the Tracking ID and Order ID in the confirmation Email/SMS that was sent to you once your order has been shipped. If you have any questions or need assistance, feel free to contact our customer support.
                </p>
                </div>
            </div>

        </>
    );
};

export default TrackOrder;
