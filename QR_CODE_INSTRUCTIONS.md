# 二维码替换说明

## 如何替换二维码

1. 准备你的二维码图片（建议尺寸：200x200px，PNG格式，透明背景）

2. 将二维码图片保存到 `public` 目录（如果不存在请创建）：
   ```
   public/qr-code.png
   ```

3. 在 `app/page.tsx` 中，找到二维码部分，将占位符替换为真实图片：

   找到这段代码：
   ```tsx
   <div className="qr-code">
     <div className="qr-grid">
       {Array.from({ length: 25 }).map((_, i) => (
         <div key={i} className="qr-cell"></div>
       ))}
     </div>
   </div>
   ```

   替换为：
   ```tsx
   <div className="qr-code">
     <img src="/qr-code.png" alt="Registration QR Code" className="qr-image" />
   </div>
   ```

4. 在样式部分添加 `.qr-image` 样式：
   ```css
   .qr-image {
     width: 100%;
     height: 100%;
     object-fit: contain;
   }
   ```

5. 删除或隐藏 `.qr-note` 提示文字（如果不再需要）

## 或者使用在线二维码生成器

你可以使用以下工具生成二维码：
- https://www.qrcode-monkey.com/
- https://www.the-qrcode-generator.com/

将生成的二维码图片保存并按照上述步骤替换即可。
