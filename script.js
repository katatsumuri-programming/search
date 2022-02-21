function search() {
    var keyword = $("#keyword").val();

    if (!(keyword == "")) {
        console.log(keyword);
        var domain = [];
        $(':checkbox[name="domain_type"]:checked').each(function () {
            domain.push($(this).val());
        });
        domain_str = ""
        console.log(domain);
        if (domain.length > 0) {
            console.log(domain.includes("medical"))

            if (domain.includes("public")) {
                domain_str += "site:.ac.jp OR site:lg.jp OR site:.go.jp"
            }
            if (domain.includes("medical")) {
                if (domain_str.length > 0) {
                    domain_str += " OR site:.ac.jp"
                } else {
                    domain_str += "site:.ac.jp"
                }
            }
            if (domain.includes("paper_domestic")) {
                if (domain_str.length > 0) {
                    domain_str += " OR site:.ci.nii.ac.jp"
                } else {
                    domain_str += "site:.ci.nii.ac.jp"
                }
            }
            if (domain.includes("paper_american")) {
                if (domain_str.length > 0) {
                    domain_str += " OR site:.pubmed.ncbi.nlm.nih.gov"
                } else {
                    domain_str += "site:.pubmed.ncbi.nlm.nih.gov"
                }
            }
            if (domain.includes("other")) {
                var domain_text = $("#domain_text").val();
                if (domain_str.length > 0) {
                    domain_str += " OR site:" + domain_text;
                } else {
                    domain_str += "site:" + domain_text;
                }
            }

        }
        var file =[];
        $(':checkbox[name="file_type"]:checked').each(function () {
            file.push($(this).val());
        });
        file_str = "";
        console.log(file);
        if (file.length > 0) {
            if (file.includes("pdf")) {
                if (file_str.length > 0) {
                    file_str += " OR filetype:pdf"
                } else {
                    file_str += "filetype:pdf"
                }
            }
            if (file.includes("powerpoint")) {
                if (file_str.length > 0) {
                    file_str += " OR filetype:ppt"
                } else {
                    file_str += "filetype:ppt"
                }
            }
            if (file.includes("word")) {
                if (file_str.length > 0) {
                    file_str += " OR filetype:doc"
                } else {
                    file_str += "filetype:doc"
                }
            }
            if (file.includes("excel")) {
                if (file_str.length > 0) {
                    file_str += " OR filetype:xls"
                } else {
                    file_str += "filetype:xls"
                }
            }
        }
        var language =[];
        $(':checkbox[name="language"]:checked').each(function () {
            language.push($(this).val());
        });

        if (language.length > 0) {
            console.log(language)
            google.load("language", "1");
            $(function(){
                google.language.translate(keyword, "ja", "en", function(result) {
                    if (!result.error) {
                        console.log(result)
                    }
                });
            });
        }


        search_main = keyword + " " + domain_str + " " + file_str
        console.log(search_main);
        window.location.href = "https://www.google.com/search?q=" + search_main;


    }
}