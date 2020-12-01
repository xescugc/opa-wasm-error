// Copyright 2018 The OPA Authors.  All rights reserved.
// Use of this source code is governed by an Apache2
// license that can be found in the LICENSE file.

const fs = require('fs');
const { loadPolicy } = require("@open-policy-agent/opa-wasm");

// Read the policy wasm file
const policyWasm = fs.readFileSync('policy.wasm');

// Load the policy module asynchronously
loadPolicy(policyWasm).then(policy => {
    const input1 = {message: "world"}
    const result1 = policy.evaluate(input1);
    console.log(JSON.stringify(result1, null, 2))

    const input2= {message: "no-world"}
    const result2 = policy.evaluate(input2);
    console.log(JSON.stringify(result2, null, 2))

    const input3= {message: "world"}
    const result3 = policy.evaluate(input3);
    console.log(JSON.stringify(result3, null, 2))
}).catch(err => {
    console.log("ERROR: ", err);
    process.exit(1);
});
