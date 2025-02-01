import os

# Walk through all directories and subdirectories
for root, _, files in os.walk("."):
    for file in files:
        if file.endswith(".html"):
            file_path = os.path.join(root, file)
            with open(file_path, "r") as f:
                content = f.read()
            
            if '<link rel="stylesheet" href="../styles.css">' not in content:
                updated_content = content.replace("</head>", '<link rel="stylesheet" href="../styles.css">\n</head>')
                
                with open(file_path, "w") as f:
                    f.write(updated_content)

print("Stylesheet linked in all HTML files.")