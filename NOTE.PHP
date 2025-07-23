
<?php
// DB connection
$conn = oci_connect("your_username", "your_password", "//localhost/XEPDB1");

if (!$conn) {
    $e = oci_error();
    die("Connection failed: " . $e['message']);
}

// Receive form data
$title = $_POST['title'];
$subject = $_POST['subject'];
$user_id = $_POST['user_id'];
$file = $_FILES['file'];

// Upload file
$upload_dir = "uploads/";
$file_path = $upload_dir . basename($file["name"]);
move_uploaded_file($file["tmp_name"], $file_path);

// Insert into Oracle
$sql = "INSERT INTO notes (user_id, title, subject, file_path, is_handwritten)
        VALUES (:user_id, :title, :subject, :file_path, 'N')";
$stid = oci_parse($conn, $sql);

oci_bind_by_name($stid, ":user_id", $user_id);
oci_bind_by_name($stid, ":title", $title);
oci_bind_by_name($stid, ":subject", $subject);
oci_bind_by_name($stid, ":file_path", $file_path);

$r = oci_execute($stid);

if ($r) {
    echo "Note uploaded successfully!";
} else {
    $e = oci_error($stid);
    echo "Error: " . $e['message'];
}

oci_free_statement($stid);
oci_close($conn);
?>
