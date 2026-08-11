export const initialColumns = [
  { id: 'col_job_number', label: 'เลขลำดับงาน', type: 'text' },
  { id: 'col_product', label: 'สินค้า', type: 'text' },
  { id: 'col_contact', label: 'ติดต่องาน', type: 'select', optionsGroup: 'contactOptions' },
  { id: 'col_status', label: 'สถานะ', type: 'select', optionsGroup: 'statusOptions' },
  { id: 'col_date', label: 'วันที่รับสินค้า', type: 'text' },
  { id: 'col_brief', label: 'บรีฟงาน', type: 'longtext' },
  { id: 'col_file', label: 'ไฟล์สินค้า', type: 'text' },
  { id: 'col_category', label: 'หมวดหมู่', type: 'select', optionsGroup: 'categoryOptions' },
  { id: 'col_price', label: 'ราคา', type: 'select', optionsGroup: 'priceOptions' },
  { id: 'col_gencode', label: 'เจนโค้ด', type: 'select', optionsGroup: 'gencodeOptions' },
  { id: 'col_payment', label: 'ทำจ่าย', type: 'select', optionsGroup: 'paymentOptions' },
  { id: 'col_com', label: 'ค่าคอม', type: 'text' },
  { id: 'col_hashtag', label: 'แฮชแท็ก (บังคับ)', type: 'select', optionsGroup: 'hashtagOptions' },
  { id: 'col_clips', label: 'จำนวนคลิป', type: 'select', optionsGroup: 'clipOptions' },
  { id: 'col_additional', label: 'เพิ่มเติม', type: 'longtext' }
];

export const initialSelectOptions = {
  contactOptions: [
    { id: 'opt_cont_1', label: 'ร้านติดต่อ', bgColor: '#dbeafe', textColor: '#1e40af' },
    { id: 'opt_cont_2', label: 'LINE', bgColor: '#dcfce7', textColor: '#166534' },
    { id: 'opt_cont_3', label: 'TikTok Shop', bgColor: '#ede9fe', textColor: '#5b21b6' },
    { id: 'opt_cont_4', label: 'นำเสนอมา', bgColor: '#f3f4f6', textColor: '#374151' },
  ],
  statusOptions: [
    { id: 'opt_stat_1', label: 'รอลอง', bgColor: '#cffafe', textColor: '#155e75' },
    { id: 'opt_stat_2', label: 'ลงแล้ว', bgColor: '#f1f5f9', textColor: '#475569' },
    { id: 'opt_stat_3', label: 'กำลังทำ', bgColor: '#ccfbf1', textColor: '#115e59' },
    { id: 'opt_stat_4', label: 'ยังไม่เริ่ม', bgColor: '#fbcfe8', textColor: '#9d174d' },
    { id: 'opt_stat_5', label: 'ยังไม่เริ่มครีเอเตอร์', bgColor: '#f3f4f6', textColor: '#374151' },
    { id: 'opt_stat_6', label: 'ส่งถึงแล้ว', bgColor: '#bbf7d0', textColor: '#166534' },
  ],
  categoryOptions: [
    { id: 'opt_cat_1', label: 'เครื่องสำอางค์', bgColor: '#fce7f3', textColor: '#9d174d' },
    { id: 'opt_cat_2', label: 'อุปกรณ์เสริม', bgColor: '#fef3c7', textColor: '#92400e' },
    { id: 'opt_cat_3', label: 'สครับ', bgColor: '#ffedd5', textColor: '#9a3412' },
    { id: 'opt_cat_4', label: 'บรา', bgColor: '#d1fae5', textColor: '#065f46' },
  ],
  priceOptions: [
    { id: 'opt_price_1', label: 'ไม่มีบัทเจท', bgColor: '#cffafe', textColor: '#155e75' },
    { id: 'opt_price_2', label: '400 บาท', bgColor: '#ffedd5', textColor: '#9a3412' },
  ],
  gencodeOptions: [
    { id: 'opt_gen_1', label: 'ไม่มี', bgColor: '#1f2937', textColor: '#ffffff' },
    { id: 'opt_gen_2', label: '100-499 (3...)', bgColor: '#fef08a', textColor: '#854d0e' },
  ],
  paymentOptions: [
    { id: 'opt_pay_1', label: 'ต้องส่งเอกสาร', bgColor: '#fef08a', textColor: '#854d0e' },
    { id: 'opt_pay_2', label: 'ส่งเอกสารเเล้ว', bgColor: '#bfdbfe', textColor: '#1e40af' },
    { id: 'opt_pay_3', label: 'รอดำเนินการ', bgColor: '#fbcfe8', textColor: '#9d174d' },
    { id: 'opt_pay_4', label: 'ทำจ่ายเสร็จสิ้น', bgColor: '#dcfce7', textColor: '#166534' },
  ],
  hashtagOptions: [
    { id: 'opt_hash_1', label: 'ไม่มี', bgColor: '#dcfce7', textColor: '#166534' },
    { id: 'opt_hash_2', label: '#พาเลทตาดับผ้า3CE...', bgColor: '#e5e7eb', textColor: '#374151' },
  ],
  clipOptions: [
    { id: 'opt_clip_1', label: '1', bgColor: '#16a34a', textColor: '#ffffff' },
    { id: 'opt_clip_2', label: '2', bgColor: '#dc2626', textColor: '#ffffff' },
  ]
};

export const initialRows = [
  { id: 'row_1', col_product: 'สำลี Facial cotton240 pcs', col_contact: 'opt_cont_1', col_status: 'opt_stat_1', col_date: '18/7/1969', col_file: 'https://vt.tiktok.com...', col_category: 'opt_cat_1', col_price: 'opt_price_1', col_gencode: 'opt_gen_1', col_com: '12.4', col_hashtag: 'opt_hash_1', col_clips: 'opt_clip_1', col_additional: '' },
  { id: 'row_2', col_product: 'บรัชม่วง,ฟ้า (2 ตลับ)', col_contact: 'opt_cont_1', col_status: 'opt_stat_2', col_date: '19/7/1969', col_file: 'https://vt.tiktok.com...', col_category: 'opt_cat_1', col_price: 'opt_price_1', col_gencode: 'opt_gen_1', col_com: '26.91', col_hashtag: 'opt_hash_1', col_clips: 'opt_clip_1', col_additional: '' }
];
