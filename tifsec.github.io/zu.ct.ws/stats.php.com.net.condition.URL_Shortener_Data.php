<?php
$data11 = json_decode(file_get_contents('https://raphaeldelhomenede.github.io/tifsec/tifsec.github.io/zu.ct.ws/stats.php.com.net.condition.URL_Shortener_Data.php.json'), true);

if (isset($_GET['shorten_url']) && isset($data11[$_GET['shorten_url']])) {
    $fullUrl11 = htmlspecialchars($data11[$_GET['shorten_url']]);
    ?>
    <br>
    <div>
        <p>
            <?php echo $fullUrl11; ?>
            <button id="copyButton1" class="copy-button">
                <img src="https://i.imgur.com/tow2qxZ.png" alt="copy" />
            </button>
            <a href="<?php echo $fullUrl11; ?>" target="_blank">
                <img height="20px" src="https://i.imgur.com/SgunhQl.png" alt="ouvrir" style="cursor: pointer;">
            </a>
            <input type="text" id="copyText1" value="<?php echo $fullUrl11; ?>" style="position: absolute; left: -99999px;">
        </p>
    </div>

    <script>
        document.getElementById('copyButton1').addEventListener('click', function () {
            var copyText = document.getElementById('copyText1');
            copyText.select();
            copyText.setSelectionRange(0, 99999); // mobile support
            document.execCommand('copy');
            alert('URL copiée dans le presse-papiers !');
        });
    </script>
<?php } ?>
