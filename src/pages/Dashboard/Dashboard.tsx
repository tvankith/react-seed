/* eslint-disable react/button-has-type */
/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from "react";
import GrowthRateCards from "../../components/Cards/GrowthRateCard";
import OverAllCards from "../../components/Cards/OverAllCards";
import SubHeading from "../../components/Subheading/Subheading";
import "./styles.scss";

const Dashboard = () => {

  const data = [
    { id: 1, name: "Jane Doe", email: "janedoe@gmail.com", type: "Image", product: "RI1502|The title of the image till the second line", license: "Editorial", amount: "₹ 9,450", date: "06.27pm | 12th Jun 2020 " },
    { id: 2, name: "Jane Doe", email: "janedoe@gmail.com", type: "Image", product: "RI1502|The title of the image till the second line", license: "Editorial", amount: "₹ 9,450", date: "06.27pm | 12th Jun 2020 " },
    { id: 3, name: "Jane Doe", email: "janedoe@gmail.com", type: "Image", product: "RI1502|The title of the image till the second line", license: "Editorial", amount: "₹ 9,450", date: "06.27pm | 12th Jun 2020 " },
    { id: 4, name: "Jane Doe", email: "janedoe@gmail.com", type: "Image", product: "RI1502|The title of the image till the second line", license: "Editorial", amount: "₹ 9,450", date: "06.27pm | 12th Jun 2020 " },
    { id: 5, name: "Jane Doe", email: "janedoe@gmail.com", type: "Image", product: "RI1502|The title of the image till the second line", license: "Editorial", amount: "₹ 9,450", date: "06.27pm | 12th Jun 2020 " },
    { id: 6, name: "Jane Doe", email: "janedoe@gmail.com", type: "Image", product: "RI1502|The title of the image till the second line", license: "Editorial", amount: "₹ 9,450", date: "06.27pm | 12th Jun 2020 " },
    { id: 7, name: "Jane Doe", email: "janedoe@gmail.com", type: "Image", product: "RI1502|The title of the image till the second line", license: "Editorial", amount: "₹ 9,450", date: "06.27pm | 12th Jun 2020 " },
    { id: 8, name: "Jane Doe", email: "janedoe@gmail.com", type: "Image", product: "RI1502|The title of the image till the second line", license: "Editorial", amount: "₹ 9,450", date: "06.27pm | 12th Jun 2020 " },
    { id: 9, name: "Jane Doe", email: "janedoe@gmail.com", type: "Image", product: "RI1502|The title of the image till the second line", license: "Editorial", amount: "₹ 9,450", date: "06.27pm | 12th Jun 2020 " },
    { id: 10, name: "Jane Doe", email: "janedoe@gmail.com", type: "Image", product: "RI1502|The title of the image till the second line", license: "Editorial", amount: "₹ 9,450", date: "06.27pm | 12th Jun 2020 " },

  ]

  return (
    <div>
      <div>
        <SubHeading title={`Overall Totals`} />
        <div className="flex w-full gap-4 my-4">
          <OverAllCards
            title={`total users`}
            value={`960`}
          />
          <OverAllCards
            title={`total Contributors`}
            value={`320`}
          />
          <OverAllCards
            title={`total Products`}
            value={`5,472`}
          />
          <OverAllCards
            title={`total Collections`}
            value={`132`}
          />
          <OverAllCards
            title={`total Stories`}
            value={`52`}
          />
        </div>
        <div className="w-full flex gap-4 my-4">
          <OverAllCards
            title={`Total Sales`}
            value={`₹ 5,44,720.23`}
            valueColor={`#219653`}
          />
          <OverAllCards
            title={`Total Payouts`}
            value={`₹ 3,32,345.30`}
            valueColor={`#FF0000`}
          />
        </div>
      </div>


      <div>
        <SubHeading title={`Overall Totals`} />
        <div className="w-full flex gap-4 my-4">
          <GrowthRateCards
            title={`New users`}
            value={`14`}
            rate={`6.9%`}
          />
          <GrowthRateCards
            title={`new contributors`}
            value={`8`}
            rate={`6.9%`}
          />
          <GrowthRateCards
            title={`New products`}
            value={`342`}
            rate={`6.9%`}
          />
          <GrowthRateCards
            title={`New Collections`}
            value={`14`}
            rate={`6.9%`}
          />
        </div>
        <div className="w-full flex gap-4 my-4">
          <GrowthRateCards
            title={`New Stories`}
            value={`14`}
            rate={`6.9%`}
          />
          <GrowthRateCards
            title={`Sales`}
            value={`₹ 4,720.23`}
            rate={`6.9%`}
            valueColor={'#219653'}
          />
          <GrowthRateCards
            title={`Payouts`}
            value={`₹ 2,345.30`}
            rate={`6.9%`}
            valueColor={`#FF0000`}
          />
        </div>
      </div>
      <div className="w-full">
        <div className="w-full justify-center flex">
          <SubHeading title={`Recent Product Orders`} />
        </div>
        <div>
          <div>
            <div className="w-full">
              <div className="flex gap-x-px">
                <div className="w-1/5 bg-primary rounded-md text-white font-bold text-xs py-3 pl-2 font-OpenSans-Bold">User</div>
                <div style={{ width: '10%' }} className="bg-primary rounded-md text-white font-bold text-xs py-3 pl-2 font-OpenSans-Bold">Type</div>
                <div style={{ width: '30%' }} className="bg-primary rounded-md text-white font-bold text-xs py-3 pl-2 font-OpenSans-Bold">Product</div>
                <div style={{ width: '15%' }} className="bg-primary rounded-md text-white font-bold text-xs py-3 pl-2 font-OpenSans-Bold">License</div>
                <div style={{ width: '15%' }} className="bg-primary rounded-md text-white font-bold text-xs py-3 pl-2 font-OpenSans-Bold">Amount</div>
                <div className="w-1/5 bg-primary rounded-md text-white font-bold text-xs py-3 pl-2 font-OpenSans-Bold" >Date</div>
              </div>
            </div>
            <div className="w-full">
              {data.map((item: any, index: any) => {
                return (
                  <div className={`flex ${index % 2 === 0 ? 'bg-white' : 'bg-primary-light'}`}>
                    <div className="w-1/5">Jane Do</div>
                    <div style={{ width: '10%' }}>Image</div>
                    <div style={{ width: '30%' }}>RI1502|The title of the image till the second line ...</div>
                    <div style={{ width: '15%' }}>Editorial</div>
                    <div style={{ width: '15%' }}>₹ 9,450</div>
                    <div className="w-1/5">06.27pm | 12th Jun 2020 </div>
                  </div>
                )
              })}

            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
export default Dashboard;
