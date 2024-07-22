<?php
// 包含PHPMailer文件
require 'vendor/PHPMailer/src/Exception.php';
require 'vendor/PHPMailer/src/PHPMailer.php';
require 'vendor/PHPMailer/src/SMTP.php';

// 使用命名空间
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 从输入流中获取原始POST数据
    $rawData = file_get_contents("php://input");
    $input = json_decode($rawData, true);

    $company_name = $input['company_name'] ?? '';
    $name = $input['name'] ?? '';
    $name2 = $input['name2'] ?? '';
    $email = $input['email'] ?? '';
    $phone = $input['phone'] ?? '';
    $text = $input['text'] ?? '';
    $mail_to = $input['mail_to'] ?? '';

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
        $mail->addAddress($mail_to); // 添加收件人

        // 内容
        $mail->isHTML(true);
        $mail->Subject = 'dreaMTank Contact Us';
        $mail->Body    = "御社名: $company_name<br> お名前: $name<br> フリガナ: $name2<br> mail: $email<br> 電話番号: $phone<br> お問い合わせ内容:<br>$text";
        $mail->AltBody = "御社名: $company_name\n お名前: $name\n フリガナ: $name2\n mail: $email\n 電話番号: $phone\n お問い合わせ内容:\n$text";

        $mail->send();
        echo '邮件发送成功';
    } catch (Exception $e) {
        echo "邮件发送失败: {$mail->ErrorInfo}";
    }
}
?>