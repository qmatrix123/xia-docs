# AD 自动化系统用户使用手册

## 一、Introduction

### 1.1 About the Application

该项目目标是尽力使 AD 组的重复性工作尽量自动化，节省成本。该项目当前版本的程序主要包一个 Web 应用（网页端操作），和一个控制台程序（类似所谓的 DOS 程序）。

当前版本的主要功能包括：（半）自动化订程序、下载并分发测试程序，发送测试程序已下载的邮件通知（草稿）。

### 1.2 Target Audience

AD 组员工。

### 1.3 Prerequisites

确保已经安装 Web 平台（张诗瑞那个平台）；

![](/assets/ie/ad/Aspose.Words.4d60eedd-2d4d-4504-a1d9-e8128b00a63a.001.png)

确保已经拥有能够使用 Web 平台的个人账户（**账户需修改邮箱信息为个人的工作邮箱地址！**）；

![](/assets/ie/ad/Aspose.Words.4d60eedd-2d4d-4504-a1d9-e8128b00a63a.002.png)

确保拥有访问 Test Program 及下属菜单的权限；

![](/assets/ie/ad/Aspose.Words.4d60eedd-2d4d-4504-a1d9-e8128b00a63a.003.png)

确保 PC 内通过公司正规途径安装了 Chrome 浏览器；

![](/assets/ie/ad/Aspose.Words.4d60eedd-2d4d-4504-a1d9-e8128b00a63a.004.png)

从控制面板卸载已经安装的 OutlookAnderunge 插件（如果未安装请忽略）。

![](/assets/ie/ad/Aspose.Words.4d60eedd-2d4d-4504-a1d9-e8128b00a63a.005.png)

## 二、Installation Guide

### 2.1 Downloading the Application

打开 xia-main Web 平台所在的目录，在 bin 目录下，是否出现了 tools.exe 和 e_sqlite3.dll；

![](/assets/ie/ad/Aspose.Words.4d60eedd-2d4d-4504-a1d9-e8128b00a63a.006.png)

### 2.2 Installing the Application

- 下载 OutlookAnderunge，进行安装，安装后重启 Outlook 即可生效；
- 控制台程序（tools）只需下载，无需安装。

### 2,3 Troubleshooting Installation Issues

- 如 tools.exe 和 e_sqlite3.dll 未出现，则需等待 xia-main Web 平台的下次更新；
- 如出现 tools.exe 被 Windows Defender 误认为威胁，则需要将 tools.exe 设为允许执行（可能需要 IT 帮助）。

### 2.4 Getting Started

运行 xia-main Web 平台，等 1-5 分钟，查看自己工作 PC 中 Documents 文件夹（OneDrive 下），是否出现了 data 文件见（data 下有 db 和 mails 两个文件夹，db 文件夹下有 ie_testorder.db 文件），如下图：

![](/assets/ie/ad/Aspose.Words.4d60eedd-2d4d-4504-a1d9-e8128b00a63a.007.png)![](/assets/ie/ad/Aspose.Words.4d60eedd-2d4d-4504-a1d9-e8128b00a63a.008.png)

![](/assets/ie/ad/Aspose.Words.4d60eedd-2d4d-4504-a1d9-e8128b00a63a.009.png)

如出现上述文件，说明程序已经安装成功。

## 三、Launching the Application

### 3.1 User Registration/Account Creation (if applicable)

如果没有账户，请联系相关人员。

### 3.2 Application Interface Overview

打开 xia-main Web，登录用户，进入首页，可看见 Test Program 菜单如下图，点击可进入：

![](/assets/ie/ad/Aspose.Words.4d60eedd-2d4d-4504-a1d9-e8128b00a63a.010.png)

点击 Test Program 图标后，可进入 Test Program 的首页，点击页面菜单可进入，如下图：

![](/assets/ie/ad/Aspose.Words.4d60eedd-2d4d-4504-a1d9-e8128b00a63a.011.png)

### 3.3 Main Features

1. 订程序
2. 下载测试程序并分发
3. 发送测试程序下载完毕的邮件通知（草稿）

## 四、Feature 1: [订程序]

### 4.1 How to Access and Use

1. 确保 Outlook 在安装完插件后，关闭并重新打开，处于运行状态；
2. 打开 xia-main Web 应用，进入 Test Programs 下的 Rules 画面，为自己所负责的变更业务设定规则（就是 Project Master HED 前边那部分，例如 BWM_G28_AUDIO）;

![](/assets/ie/ad/Aspose.Words.4d60eedd-2d4d-4504-a1d9-e8128b00a63a.012.png)

3. Outlook 插件在遇到符合规则（包括邮件名称以 Anderungen 开头，并负责自己设定的 Project Master HED 前边那部分）的变更邮件后，会将相关数据插入到 PC 本地数据库，并在 Outlook Inbox 的 Automation Tasks 下面的 Pending 文件夹复制该邮件，并改名（该操作为自动完成）；

![](/assets/ie/ad/Aspose.Words.4d60eedd-2d4d-4504-a1d9-e8128b00a63a.013.png)

4. 打开 xia-main Web 应用，进入 Create Orders 画面，画面将出现需要进行订程序操作的变更信息（如果有的话）；

![](/assets/ie/ad/Aspose.Words.4d60eedd-2d4d-4504-a1d9-e8128b00a63a.014.png)

5. 勾选需要订程序的变更，点击 Save，会在 BPM 上自动化 Create Order（不发送）；点击 Send 会在 BPM 上自动化 Create Order 并发送（该项功能暂时没敢测试），操作时 Chrome 浏览器会全屏，尽量停止其它 PC 操作；

![](/assets/ie/ad/Aspose.Words.4d60eedd-2d4d-4504-a1d9-e8128b00a63a.015.png)

![](/assets/ie/ad/Aspose.Words.4d60eedd-2d4d-4504-a1d9-e8128b00a63a.016.png)

6. 订程序成功后，Web 页面上的变更记录会被移除；

![](/assets/ie/ad/Aspose.Words.4d60eedd-2d4d-4504-a1d9-e8128b00a63a.017.png)

7. 可以在 Create Order History 画面查看成功订程序的变更记录。

![](/assets/ie/ad/Aspose.Words.4d60eedd-2d4d-4504-a1d9-e8128b00a63a.018.png)

### 4.2 Tips and Tricks

1. 确保 Outlook 没有禁用 OutlookAnderugen 插件；
2. 确保 xia-mian Web 应用的账户中设置了个人的工作邮箱；
3. 在 BPM 订程序的自动化操作，因网络等原因可能会失败，需要重复操作；
4. 在 BPM 订程序的自动化操作，因 BPM 系统画面修改等原因可能会导致多次重复操作失败，则需要联系开发人员。
5. 当前程序版本将数据保存在本地数据库（Documents/data/db 下），不要删除该文件。

## 五、Feature 2: [测试程序下载]

### 5.1 How to Access and Use

1. 在 Outlook 收到 TestPrograms…Order Complete 邮件后，会将相关信息（包括 Order 和附属程序文件信息）自动插入数据库，为待处理状态；
2. 确保首先用你的账户已经登陆到 xia-main Web 平台，否则有些定时功能不会成功；
3. Web 平台定时（当前 15 分钟）扫描待处理的 Order 信息，并执行相关自动化操作；
   - 第一次会自动打开相关的测试程序下载页面，抓取相关信息并保存至数据库；
   - 在相关信息成功获取后，在下一次定时扫描时，会尝试自动化下载相关测试程序至 O 盘指定目录，并改名；如果失败则会等待下次定时重新尝试，直至成功；

![](/assets/ie/ad/Aspose.Words.4d60eedd-2d4d-4504-a1d9-e8128b00a63a.019.png)

4. 在成功下载并分发所有相关的测试程序后，该 Order 会被标记为已完成，等待发送通知邮件；
5. 进入 Order Files Download 画面可以手动对相关订单的测试程序进行下载（该功能建议弃用）；

![](/assets/ie/ad/Aspose.Words.4d60eedd-2d4d-4504-a1d9-e8128b00a63a.020.png)

6. 进入 Order Download History 画面可以查看所有待下载和已下载的 Order 信息。

![](/assets/ie/ad/Aspose.Words.4d60eedd-2d4d-4504-a1d9-e8128b00a63a.021.png)

### 5.2 Tips and Tricks

同 Feature [订程序]

## 六、 Feature 3: [测试程序下载后发送通知邮件（草稿）]

### 6.1 How to Access and Use

1. 在 Order 的测试程序下载成功后，xia-main Web 程序会定时自动扫描待发通知的 Order 信息；
2. 扫描到待发通知邮件的 Order 后，会尝试关联数据库中存在变更邮件的信息（获取 PU 状态），并尝试自动打开相关测试程序所在的文件夹并截图，并准备好通知邮件的草稿，位于 Outlook 的 Draft 文件夹下；

![](/assets/ie/ad/Aspose.Words.4d60eedd-2d4d-4504-a1d9-e8128b00a63a.022.png)

![](/assets/ie/ad/Aspose.Words.4d60eedd-2d4d-4504-a1d9-e8128b00a63a.023.png)

### 6.2 Tips and Tricks

1. 通知邮件草稿的标题中，[生产类型] 部分需要手动替换；
2. 如果未能在数据库中关联到相关的变更邮件信息，则标题中 [PU 状态] 需要手动进行填充；
3. 通知邮件草稿的正文中，[应用程序下载路径]，[应用程序下载截图] 需手动添加；
4. 如果同时扫描到多个待发邮件的 Order，在处理时可能不会全部成功，则需等待下一次扫描在进行处理。

## 七、 Troubleshooting

### 7.1 Known Issues and Workarounds

1. 自动化订程序因为网络、BPM 系统变化等原因可能会失败，失败后需手动重新操作；
2. 自动下载测试程序可能不会一次性成功，平台会自动定时重试，直至成功；
3. 测试程序下载后发送通知邮件草稿功能，如果添加截图功能，系统会禁止该程序运行，故暂时未加入截图功能，正在尝试其他办法；
4. Outlook 插件可能会被 Outlook 禁用
   - 需手动启用

点击 Outlook 的 File，进入如下画面：

![](/assets/ie/ad/Aspose.Words.4d60eedd-2d4d-4504-a1d9-e8128b00a63a.026.png)

点击 Options，再点击 Add-ins，再点击 Go：

![](/assets/ie/ad/Aspose.Words.4d60eedd-2d4d-4504-a1d9-e8128b00a63a.027.png)

选中 OutlookAndergun，点击 OK：

![](/assets/ie/ad/Aspose.Words.4d60eedd-2d4d-4504-a1d9-e8128b00a63a.028.png)

客户端程序 tools.exe 可能会被误认为威胁或病毒。

遇到该问题再说。

Contact Information for Support

Dave.Yang@draexlmaier.com

<RightMenu />
