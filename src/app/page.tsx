import React from "react";

const ApiDoc: React.FC = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6, padding: "20px" }}>
      <h1>接口文档：用户消息管理</h1>
      <p>本文档描述了用于管理用户消息的 API 接口，包括发送、查询和更新消息状态的功能。每个接口包含其 HTTP 方法、URL、参数以及响应结构。</p>

      <hr />

      {/* 接口1: 发送消息 */}
      <section>
        <h2>1. 发送消息</h2>
        <p><strong>接口地址：</strong> <code>/admin/msg/send</code></p>
        <p><strong>请求方式：</strong> <code>POST</code></p>
        <p><strong>功能说明：</strong> 向指定用户通过多个通道发送消息。</p>

        <h3>请求体参数：</h3>
        <pre>{`
{
  "msgContent": "消息内容",
  "msgTitle": "消息标题",
  "msgType": 0,
  "orgIds": "100,200",
  "pushChannels": "0,1",
  "sourceType": 0,
  "userIds": "1,2,3"
}`}</pre>
        <table border="1" cellPadding="8" cellSpacing="0">
          <thead>
            <tr>
              <th>参数名</th>
              <th>类型</th>
              <th>是否必填</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>msgContent</td><td>String</td><td>是</td><td>消息内容</td></tr>
            <tr><td>msgTitle</td><td>String</td><td>是</td><td>消息标题</td></tr>
            <tr><td>msgType</td><td>Number</td><td>是</td><td>消息类型 [0: 系统, 1: 用户]</td></tr>
            <tr><td>orgIds</td><td>String</td><td>否</td><td>逗号分隔的组织 ID 列表</td></tr>
            <tr><td>pushChannels</td><td>String</td><td>是</td><td>逗号分隔的推送通道 [0: 站内消息, 1: 邮件, 2: 短信]</td></tr>
            <tr><td>sourceType</td><td>Number</td><td>是</td><td>来源类型 [0: 系统, 1: 用户]</td></tr>
            <tr><td>userIds</td><td>String</td><td>是</td><td>逗号分隔的用户 ID 列表</td></tr>
          </tbody>
        </table>

        <h3>响应：</h3>
        <pre>{`
{
  "code": 200,
  "message": "成功",
  "ok": true
}`}</pre>
      </section>

      <hr />

      {/* 接口2: 发送详情 */}
      <section>
        <h2>2. 发送详情</h2>
        <p><strong>接口地址：</strong> <code>/admin/msg/send/{'{id}'}</code></p>
        <p><strong>请求方式：</strong> <code>GET</code></p>
        <p><strong>功能说明：</strong> 根据消息 ID 获取发送的详细信息。</p>

        <h3>路径参数：</h3>
        <table border="1" cellPadding="8" cellSpacing="0">
          <thead>
            <tr>
              <th>参数名</th>
              <th>类型</th>
              <th>是否必填</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>id</td><td>Number</td><td>是</td><td>消息的唯一标识符</td></tr>
          </tbody>
        </table>

        <h3>响应：</h3>
        <pre>{`
{
  "code": 200,
  "message": "",
  "ok": true,
  "result": {
    "id": 1,
    "msgTitle": "消息标题",
    "msgContent": "消息内容",
    "msgType": 0,
    "orgIds": "100,200",
    "userIds": "1,2,3",
    "userNames": "name1,name2,name3",
    "pushChannels": "0,1",
    "pushStatus": 1,
    "pushTime": "2024-12-20T10:00:00",
    "sourceType": 0,
    "createTime": "2024-12-19T15:30:00"
  }
}`}</pre>
      </section>

      <hr />

      {/* 接口3: 标记所有消息已读 */}
      <section>
        <h2>3. 标记所有消息已读</h2>
        <p><strong>接口地址：</strong> <code>/admin/msg/user/mark-all-read</code></p>
        <p><strong>请求方式：</strong> <code>POST</code></p>
        <p><strong>功能说明：</strong> 将当前用户的所有未读消息标记为已读。</p>

        <h3>响应：</h3>
        <pre>{`
{
  "code": 200,
  "message": "成功",
  "ok": true
}`}</pre>
      </section>

      <hr />

      {/* 接口4: 标记消息已读 */}
      <section>
        <h2>4. 标记消息已读</h2>
        <p><strong>接口地址：</strong> <code>/admin/msg/user/mark-read</code></p>
        <p><strong>请求方式：</strong> <code>POST</code></p>
        <p><strong>功能说明：</strong> 将指定的消息标记为已读。</p>

        <h3>请求参数：</h3>
        <p><strong>msgIds：</strong> 要标记为已读的消息 ID 列表 (逗号分隔)。</p>
        <pre>{`
msgIds=1,2,3`}</pre>

        <h3>响应：</h3>
        <pre>{`
{
  "code": 200,
  "message": "成功",
  "ok": true
}`}</pre>
      </section>

      <hr />

      {/* 接口5: 消息分页 */}
      <section>
        <h2>5. 消息分页</h2>
        <p><strong>接口地址：</strong> <code>/admin/msg/user/page</code></p>
        <p><strong>请求方式：</strong> <code>GET</code></p>
        <p><strong>功能说明：</strong> 分页查询当前用户的消息列表。</p>

        <h3>请求参数：</h3>
        <table border="1" cellPadding="8" cellSpacing="0">
          <thead>
            <tr>
              <th>参数名</th>
              <th>类型</th>
              <th>是否必填</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>pageNum</td><td>Number</td><td>是</td><td>页码</td></tr>
            <tr><td>pageSize</td><td>Number</td><td>是</td><td>每页记录数</td></tr>
          </tbody>
        </table>

        <h3>响应：</h3>
        <pre>{`
{
  "code": 200,
  "message": "成功",
  "ok": true,
  "result": {
    "total": 10,
    "list": [
      {
        "msgTitle": "消息标题",
        "pushChannel": 0,
        "pushStatus": 1,
        "readStatus": 0,
        "pushTime": "2024-12-20T10:00:00",
        "readTime": null,
        "createTime": "2024-12-19T15:30:00"
      }
    ]
  }
}`}</pre>
      </section>

      <hr />

      {/* 接口6: 发送消息分页 */}
      <section>
        <h2>6. 发送消息分页</h2>
        <p><strong>接口地址：</strong> <code>/admin/msg/send/page</code></p>
        <p><strong>请求方式：</strong> <code>GET</code></p>
        <p><strong>功能说明：</strong> 分页查询发送的消息列表。</p>

        <h3>请求参数：</h3>
        <table border="1" cellPadding="8" cellSpacing="0">
          <thead>
            <tr>
              <th>参数名</th>
              <th>类型</th>
              <th>是否必填</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>pageNum</td><td>Number</td><td>是</td><td>页码</td></tr>
            <tr><td>pageSize</td><td>Number</td><td>是</td><td>每页记录数</td></tr>
          </tbody>
        </table>

        <h3>响应：</h3>
        <pre>{`
{
  "code": 200,
  "message": "成功",
  "ok": true,
  "result": {
    "total": 5,
    "list": [
      {
        "msgTitle": "发送的消息标题",
        "pushChannels": "0,1",
        "pushStatus": 1,
        "createTime": "2024-12-19T15:30:00"
      }
    ]
  }
}`}</pre>
      </section>
    </div>
  );
};

export default ApiDoc;
