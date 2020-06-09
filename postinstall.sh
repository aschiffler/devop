#!/bin/bash
mkdir -p -m 777 node-red/uibuilder/ml5_train/src
cp -r ml5_train/* node-red/uibuilder/ml5_train/src/

mkdir -p -m 777 node-red/uibuilder/ml5/src
cp -r ml5/* node-red/uibuilder/ml5/src/

mkdir -p -m 777 node-red/uibuilder/pose/src
cp -r pose/* node-red/uibuilder/pose/src/