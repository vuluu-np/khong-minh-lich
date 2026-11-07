import { solar2lunar } from 'solarlunar';
export const branches=['Tý','Sửu','Dần','Mão','Thìn','Tỵ','Ngọ','Mùi','Thân','Dậu','Tuất','Hợi'];
export const animals=['🐭','🐮','🐯','🐰','🐲','🐍','🐴','🐐','🐵','🐔','🐶','🐷'];
export const names=['Không Vong','Đại An','Tốc Hỷ','Lưu Niên','Xích Khẩu','Tiểu Cát'];
export const meanings=['Không thuận, dễ trở ngại','Bình an, ổn định','Tin vui, thuận lợi','Chậm trễ, kéo dài','Dễ tranh cãi, bất hòa','May mắn, gặp trợ giúp'];
export const levels=['bad','good','good','neutral','bad','good'];
export function vietnamDate(date:Date){const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Ho_Chi_Minh',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(date); const get=(s:string)=>Number(parts.find(p=>p.type===s)?.value);return {year:get('year'),month:get('month'),day:get('day')}}
export function lunar(date:Date){const {year,month,day}=vietnamDate(date);return solar2lunar(year,month,day)}
// Quy ước Lục Diệu: tháng Giêng bắt đầu Đại An tại ngày mùng 1, mỗi tháng và ngày dịch một cung.
// Giờ Tý là khắc thứ nhất; các giờ tiếp theo dịch một cung. Đây là quy ước cần đối chiếu với bảng mẫu trước khi sử dụng cho quyết định quan trọng.
export function hourResult(month:number,day:number,branchIndex:number){const rem=((month+day+branchIndex-1)%6+6)%6;return {name:names[rem],meaning:meanings[rem],level:levels[rem],index:rem}}
export function compatibility(age:number,hour:number){if(age===hour)return 'Đồng chi';if(([0,1,2,3,4,5,6,7,8,9,10,11] as number[]).some((b)=>b===age&&((b+6)%12)===hour))return 'Lục xung';const groups=[[0,4,8],[1,5,9],[2,6,10],[3,7,11]];if(groups.some(g=>g.includes(age)&&g.includes(hour)))return 'Tam hợp';const pairs=[[0,1],[2,11],[3,10],[4,9],[5,8],[6,7]];if(pairs.some(g=>g.includes(age)&&g.includes(hour)))return 'Lục hợp';return 'Trung tính'}
export function timeRange(i:number){const start=(23+2*i)%24,end=(start+2)%24;return `${String(start).padStart(2,'0')}:00–${String(end).padStart(2,'0')}:00`}
export function currentBranch(){const hour=Number(new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Ho_Chi_Minh',hour:'2-digit',hourCycle:'h23'}).format(new Date()));return Math.floor(((hour+1)%24)/2)}
export function khongMinhDay(month:number,day:number){ // Bảng ngày Khổng Minh lưu hành theo 3 nhóm tháng; nhãn riêng, không đồng nhất Lục Diệu.
 const group=(month-1)%3; const table=[['Đường Phong','Kim Thổ','Kim Dương','Thuần Dương','Đạo Tặc','Hảo Thương','Thiên Đạo','Thiên Thương'],['Thiên Đạo','Thiên Thương','Thiên Hầu','Thiên Dương','Thiên Môn','Thiên Đường','Thiên Tài','Thiên Tặc'],['Thiên Tặc','Thiên Dương','Thiên Môn','Thiên Đường','Thiên Tài','Thiên Hầu','Thiên Thương','Thiên Đạo']];return table[group][(day-1)%8]}
