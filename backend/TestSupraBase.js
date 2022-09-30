//import { createClient } from '@supabase/supabase-js'
const {createClient} = require('@supabase/supabase-js');

const supabaseUrl = 'https://gjzcfefmcwhswjobgdqy.supabase.co';
const supabaseKey = 'REDACTED_SUPABASE_ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

// Loading Express
const express = require('express');
var cors = require('cors');
const res = require('express/lib/response');
const app = express();
app.use(express.json());
app.use(cors());

app.get('/api/runQuery', (req, res) => {
    const incrementCount = async() => {
        const {data} = await supabase.rpc('filterfees3', {min_fee: 700, max_fee: 800});  // This works
        //const {data} = await supabase.from('Fees').select("centre_code").eq("centre_code", "EB0001");
        console.log({data});
    };
    res.send(incrementCount());
});  // */

const incrementCount = async() => {
    const {data} = await supabase.rpc('FilterFees3', {min_fee: 700, max_fee: 800});
    return data;
};
const port = process.env.PORT || 9000;
app.listen(port, () => console.log("Listening on: " + port));
//console.log(incrementCount());