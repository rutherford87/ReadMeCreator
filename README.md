# TaxiDataPipeLine - Data Pipeline Project
<!-- TOC -->
- [Description](#description)
- [Build Status](#build-status)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Clone repository](#clone-repository)
- [Set-up development environment](#set-up-development-environment)
  - [Navigate to source folder](#navigate-to-source-folder)
  - [Create a virtual environment](#create-a-virtual-environment)
  - [Install project dependencies](#install-project-dependencies)
- [How to run](#how-to-run)
- [How to Unit Test](#how-to-unit-test)
- [How to check coverage](#how-to-check-coverage)
- [Data Source](#data-source)
- [Automated build setup](#automated-build-setup)
- [Future Enhancement Plan:](#future-enhancement-plan)
<!-- /TOC -->

## Description
TaxiDataPipeLine is an application to demonstrate creation of a simple data pipeline using Yellow Taxis trip data.

## Build Status

|   | Build & Test |
|---|:-----:|
|**Windows x64**|![Build & Test][win-x64-build-badge]
|**Linux x64**|![Build & Test][linux-x64-build-badge]

[win-x64-build-badge]: https://mseng.visualstudio.com/pipelinetools/_apis/build/status/VSTS.Agent/azure-pipelines-agent.ci?branchName=master&jobname=Windows%20Agent%20(x64)
[linux-x64-build-badge]: https://mseng.visualstudio.com/pipelinetools/_apis/build/status/VSTS.Agent/azure-pipelines-agent.ci?branchName=master&jobname=Linux%20Agent%20(x64)

## Folder Structure

* [docs](docs/) - Project documentation
* [src](src/) - Python source code
* [test](test/) - Unit test