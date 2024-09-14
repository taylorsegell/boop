/**
  {
    "api": 1,
    "name": "Requirements to complete pyproject.toml",
    "description": "Converts requirements.txt format pyproject.toml format including package info",
    "author": "Taylor Segell",
    "icon": "code",
    "tags": "python,requirements.txt,pyproject.toml,conversion"
  }
**/

function main(state) {
    const inputText = state.text.trim();
    const lines = inputText.split('\n');

    // Initialize an empty string for TOML content
    let tomlContent = '';

    // Parse each line of requirements.txt format input
    lines.forEach(line => {
        line = line.trim();
        if (line && !line.startsWith('#')) {
            let [packageName, packageVersion] = line.split('==');
            // Construct the TOML entry
            tomlContent += `${packageName} = "${packageVersion}"\n`;
        }
    });

    // Construct the full pyproject.toml content
    let pyprojectToml = `
[tool.poetry]
name = "Your Project Name"
version = "0.1.0"
description = "Your Project Description"
authors = ["Your Name <your.email@example.com>"]
readme = "README.md"

[tool.poetry.dependencies]
${tomlContent.trim()}

[build-system]
requires = ["poetry-core"]
build-backend = "poetry.core.masonry.api"
`;

    // Set the output to state.text
    state.text = pyprojectToml;
}
