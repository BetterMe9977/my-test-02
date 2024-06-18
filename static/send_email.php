<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
// 包含PHPMailer文件
require 'vendor/PHPMailer/src/Exception.php';
require 'vendor/PHPMailer/src/PHPMailer.php';
require 'vendor/PHPMailer/src/SMTP.php';

// 使用命名空间
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents('php://input'), true);

    $name = $data['name'] ?? '';
    $email = $data['email'] ?? '';
    $age = $data['age'] ?? '';
    $feedback = $data['feedback'] ?? '';
    
    if (empty($name) || empty($email) || empty($age) || empty($feedback)) {
        echo json_encode(['message' => '所有字段都是必填项']);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // 服务器配置
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // SMTP服务器
        $mail->SMTPAuth = true;
        $mail->Username = 'huangfei@dreamtank.co.jp'; // SMTP用户名
        $mail->Password = 'nazs hrsa wubi upon'; // SMTP密码
        $mail->SMTPSecure = 'tls'; // 加密方式 (ssl/tls)
        $mail->Port = 587; // 端口号

        // 收件人设置
        $mail->setFrom($email, $name);
        $mail->addAddress('nutletor@gmail.com'); // 添加收件人

        // 内容
        $mail->isHTML(true);
        $mail->Subject = '调查问卷反馈';
        $mail->Body    = "姓名: $name<br>电子邮件: $email<br>年龄: $age<br>反馈:<br>$feedback";
        $mail->AltBody = "姓名: $name\n电子邮件: $email\n年龄: $age\n反馈:\n$feedback";

        $mail->send();
        echo '邮件发送成功';
    } catch (Exception $e) {
        echo "邮件发送失败: {$mail->ErrorInfo}";
    }
}
?>