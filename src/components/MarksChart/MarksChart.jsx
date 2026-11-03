import React from 'react';
import { use } from 'react';
import { BarChart, XAxis, YAxis } from 'recharts';
import { Bar } from 'recharts';

const MarksChart = ({ marksPromise }) => {
    const marksDataRes = use(marksPromise);

    const marksData = marksDataRes.data;
    console.log("marksData", marksData);

    //data processing for charting
    const marksChartData = marksData.map((studentData) => {
        // const { name, marks } = studentData;
        const student = {
            id: studentData.id,
            name: studentData.name,
            physics: studentData.marks.physics,
            maths: studentData.marks.maths,
            chemistry: studentData.marks.chemistry
        }
        return student;
    })
    console.log("marksChartData", marksChartData);
    return (
        <div>
            <BarChart width={600} height={300} data={marksChartData}>
                <Bar dataKey="physics" fill="#8884d8" />
                <Bar dataKey="maths" fill="#82ca9d" />
                <Bar dataKey="chemistry" fill="#ffc658" />
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
            </BarChart>
        </div>
    );
};

export default MarksChart;